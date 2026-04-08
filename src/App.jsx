import React from 'react';
import Header from './components/Header';
import IPCard from './components/IPCard';
import MapComponent from './components/MapComponent';
import InfoGrid from './components/InfoGrid';
import Footer from './components/Footer';
import useIPData from './hooks/useIPData';

function App() {
    const { data, loading, error } = useIPData();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-white"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-red-600 transition-colors">
                Error loading IP data: {error}
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col font-sans transition-colors">
            <Header />

            <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl space-y-8">
                {/* Top Section: IP Card and Map */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:items-stretch lg:h-[450px]">
                    <div className="h-full">
                        <IPCard data={data} />
                    </div>
                    <div className="h-full min-h-[350px] lg:min-h-full rounded-3xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800">
                        <MapComponent lat={data?.latitude} lon={data?.longitude} city={data?.city} country={data?.country_name} isp={data?.org} />
                    </div>
                </div>

                {/* Info Grid */}
                <InfoGrid data={data} />

                {/* Fingerprint Section (Footer Part 1) */}
                <Footer />
            </main>

            <footer className="text-center py-6 text-gray-400 dark:text-gray-600 text-xs tracking-widest uppercase">
                © {new Date().getFullYear()} Routely
            </footer>
        </div>
    );
}

export default App;
