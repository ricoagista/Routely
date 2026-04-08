import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// Component to update map center when props change
function ChangeView({ center }) {
    const map = useMap();
    map.setView(center);
    return null;
}

const MapComponent = ({ lat, lon, city, country, isp }) => {
    if (!lat || !lon) return (
        <div className="h-full w-full bg-gray-200 animate-pulse flex items-center justify-center text-gray-400">
            Loading Map...
        </div>
    );

    const position = [lat, lon];

    return (
        <div className="h-full w-full relative z-0">
            <MapContainer
                center={position}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
                zoomControl={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />
                <Marker position={position}>
                    <Popup>
                        {city}, {country} <br /> {isp}
                    </Popup>
                </Marker>
                <ChangeView center={position} />
            </MapContainer>

            {/* Overlay Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 z-[1000] flex justify-between items-end transition-colors">
                <div>
                    <div className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">LOKASI</div>
                    <div className="font-bold text-sm text-gray-800 dark:text-gray-200">{city}, {country}</div>
                </div>
                <div className="text-right">
                    <div className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">ISP</div>
                    <div className="font-bold text-sm text-gray-800 dark:text-gray-200">{isp}</div>
                </div>
            </div>

            {/* Dark Mode Overlay for Map Tiles */}
            <div className="absolute inset-0 pointer-events-none mix-blend-multiply bg-transparent dark:bg-gray-800/50 z-[400]"></div>
        </div>
    );
};

export default MapComponent;
