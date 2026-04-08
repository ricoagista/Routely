import { useState, useEffect } from 'react';
import axios from 'axios';

const useIPData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            // List of APIs to try in order (menggabungkan yang paling jarang diblokir)
            const apis = [
                {
                    url: 'https://get.geojs.io/v1/ip/geo.json',
                    transform: (data) => ({
                        ip: data.ip,
                        city: data.city,
                        country_name: data.country,
                        org: data.organization_name || '-',
                        asn: data.organization || '-',
                        latitude: parseFloat(data.latitude),
                        longitude: parseFloat(data.longitude),
                        version: 'IPv4'
                    })
                },
                {
                    url: 'https://ip-api.com/json/?fields=status,message,country,city,lat,lon,isp,org,as,query',
                    transform: (data) => ({
                        ip: data.query,
                        city: data.city,
                        country_name: data.country,
                        org: data.isp,
                        asn: data.as,
                        latitude: data.lat,
                        longitude: data.lon,
                        version: 'IPv4'
                    })
                },
                {
                    url: 'https://ipapi.co/json/',
                    transform: (data) => ({
                        ip: data.ip,
                        city: data.city,
                        country_name: data.country_name,
                        org: data.org,
                        asn: data.asn,
                        latitude: data.latitude,
                        longitude: data.longitude,
                        version: data.version
                    })
                },
                {
                    url: 'https://ipwhois.app/json/',
                    transform: (data) => ({
                        ip: data.ip,
                        city: data.city,
                        country_name: data.country,
                        org: data.isp,
                        asn: data.asn,
                        latitude: data.latitude,
                        longitude: data.longitude,
                        version: 'IPv4'
                    })
                }
            ];

            for (const api of apis) {
                try {
                    console.log(`Trying to fetch from ${api.url}...`);
                    const response = await axios.get(api.url, { timeout: 8000 }); // 8s timeout per API

                    if (response.status === 200 && response.data) {
                        // Handle ip-api specific success check
                        if (api.url.includes('ip-api.com') && response.data.status === 'fail') {
                            throw new Error(response.data.message);
                        }

                        console.log(`Success from ${api.url}`);
                        const normalizedData = api.transform(response.data);
                        setData(normalizedData);
                        setLoading(false);
                        return; // Stop loop on success
                    }
                } catch (err) {
                    console.warn(`Failed to fetch from ${api.url}:`, err.message);
                    // Continue to next API
                }
            }

            // If loop finishes without returning
            setError('All IP data providers failed. Please check your connection or ad-blocker.');
            setLoading(false);
        };

        fetchData();
    }, []);

    return { data, loading, error };
};

export default useIPData;
