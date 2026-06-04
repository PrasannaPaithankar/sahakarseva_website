import React from 'react';

export function SimpleFooter() {
    return (
        <footer className="w-full bg-white border-t border-gray-200 p-6 mt-auto">
            <p className="text-center text-gray-600 font-medium">
                &copy; {new Date().getFullYear()} BM Sahakar Seva LLP. All rights reserved.
            </p>
        </footer>
    );
}