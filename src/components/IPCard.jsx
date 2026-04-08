import React from 'react';

const IPCard = ({ data }) => {
    if (!data) return null;

    return (
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-12 shadow-sm border border-gray-100 dark:border-gray-700 h-full flex flex-col justify-center transition-colors">
            <div className="mb-8">
                <h2 className="text-xs font-bold text-gray-400 dark:text-gray-500 tracking-[0.2em] uppercase mb-4">
                    INFORMASI KONEKSI SAAT INI
                </h2>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Alamat IP Publik</div>
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight font-sans mb-6 break-all leading-tight">
                    {data.ip}
                </div>

                <div className="flex gap-3 mb-8 flex-wrap">
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-bold px-3 py-1 rounded-md tracking-wider">
                        {data.version || 'IPV4 ADDRESS'}
                    </span>
                    <span className="bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-bold px-3 py-1 rounded-md tracking-wider border border-green-100 dark:border-green-800">
                        KONEKSI STABIL
                    </span>
                </div>

                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-md">
                    Perangkat Anda terhubung melalui infrastruktur jaringan terenkripsi.
                    Semua detail di bawah ini adalah representasi dari identitas digital Anda.
                </p>
            </div>
        </div>
    );
};

export default IPCard;
