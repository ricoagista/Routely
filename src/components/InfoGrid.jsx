import React from 'react';

const InfoCard = ({ title, value, subtext, statusColor }) => (
    <div className="bg-white dark:bg-gray-800 p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col justify-between h-full hover:shadow-md transition-shadow">
        <div className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
            {title}
        </div>
        <div>
            <div className="text-lg font-bold text-gray-900 dark:text-white mb-1 truncate" title={value}>
                {statusColor && (
                    <span className={`inline-block w-2 h-2 rounded-full mr-2 ${statusColor}`}></span>
                )}
                {value}
            </div>
            {subtext && <div className="text-xs text-gray-500 dark:text-gray-400 italic">{subtext}</div>}
        </div>
    </div>
);

const InfoGrid = ({ data }) => {
    if (!data) return null;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* ASN Info */}
            <InfoCard
                title="ASN INFO"
                value={data.asn}
                subtext={data.org}
            />

            {/* Coordinates */}
            <InfoCard
                title="KOORDINAT"
                value={`${data.latitude}, ${data.longitude}`}
                subtext="Akurasi: Est. City Level"
            />

            {/* Location Info */}
            <InfoCard
                title="LOKASI"
                value={data.city || 'Tidak diketahui'}
                subtext={data.country_name || 'Negara tidak ditemukan'}
            />
        </div>
    );
};

export default InfoGrid;
