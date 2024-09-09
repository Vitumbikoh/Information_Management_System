import React from 'react';

const Header = () => {
    return (
        <header className="bg-yellow-500 p-4 flex justify-between items-center text-white">
            <h1 className="text-2xl font-bold">RUSESCO SCHOOL MANAGEMENT SYSTEM</h1>
            <div className="flex items-center space-x-4">
                <span>Running Session: admin</span>
                <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded">Change Language</button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded">Log Out</button>
            </div>
        </header>
    );
}

export default Header;
