import React from 'react';
import { Crosshair } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
    return (
        <header className="flex justify-between items-center py-6 px-4 max-w-6xl mx-auto w-full">
            <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-gray-900 dark:text-white">
                <div className="bg-black dark:bg-white text-white dark:text-black p-1 rounded-md">
                    <Crosshair size={20} />
                </div>
                <span>Routely</span>
            </div>

            <div className="flex items-center gap-4">
                <ThemeToggle />
            </div>
        </header>
    );
};

export default Header;
