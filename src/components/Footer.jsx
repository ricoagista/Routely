import React, { useState, useEffect } from 'react';

const Footer = () => {
    const [fingerprint, setFingerprint] = useState({
        browser: 'Loading...',
        os: 'Loading...',
        resolution: 'Loading...'
    });

    useEffect(() => {
        // Basic browser detection
        const userAgent = navigator.userAgent;
        let browserName = "Unknown Browser";

        if (userAgent.indexOf("Firefox") > -1) {
            browserName = "Mozilla Firefox";
        } else if (userAgent.indexOf("SamsungBrowser") > -1) {
            browserName = "Samsung Internet";
        } else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
            browserName = "Opera";
        } else if (userAgent.indexOf("Trident") > -1) {
            browserName = "Microsoft Internet Explorer";
        } else if (userAgent.indexOf("Edge") > -1) {
            browserName = "Microsoft Edge";
        } else if (userAgent.indexOf("Chrome") > -1) {
            browserName = "Google Chrome";
        } else if (userAgent.indexOf("Safari") > -1) {
            browserName = "Apple Safari";
        }

        // Basic OS detection
        let osName = "Unknown OS";
        if (userAgent.indexOf("Win") !== -1) osName = "Windows";
        if (userAgent.indexOf("Mac") !== -1) osName = "MacOS";
        if (userAgent.indexOf("X11") !== -1) osName = "UNIX";
        if (userAgent.indexOf("Linux") !== -1) osName = "Linux";
        if (userAgent.indexOf("Android") !== -1) osName = "Android";
        if (userAgent.indexOf("like Mac") !== -1) osName = "iOS";

        setFingerprint({
            browser: browserName,
            os: osName,
            resolution: `${window.screen.width} × ${window.screen.height}`
        });
    }, []);

    return (
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 dark:border-gray-700 mt-8 transition-colors">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">Fingerprint Perangkat</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm">
                        Berikut adalah data teknis yang dikirimkan oleh browser Anda kepada server.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full md:w-auto">
                    <div>
                        <div className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">BROWSER</div>
                        <div className="font-semibold text-gray-800 dark:text-gray-200">{fingerprint.browser}</div>
                    </div>
                    <div>
                        <div className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">PLATFORM</div>
                        <div className="font-semibold text-gray-800 dark:text-gray-200">{fingerprint.os}</div>
                    </div>
                    <div>
                        <div className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">RESOLUSI</div>
                        <div className="font-semibold text-gray-800 dark:text-gray-200">{fingerprint.resolution}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
