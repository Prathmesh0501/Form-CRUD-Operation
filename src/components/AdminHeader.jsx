// AdminHeader.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const AdminHeader = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`flex justify-between items-center bg-gray-800 text-white p-4 ${isMenuOpen ? 'open' : ''}`}>
            <div className="text-xl font-bold">Admin Panel</div>
            <div className="cursor-pointer lg:hidden" onClick={toggleMenu}>
                <div className="bar w-6 h-1 bg-white mb-1"></div>
                <div className="bar w-6 h-1 bg-white mb-1"></div>
                <div className="bar w-6 h-1 bg-white"></div>
            </div>
            <div className="hidden lg:flex">
                <Link to="/" className="text-white text-sm mx-4">Dashboard</Link>
                <Link to="userlist" className="text-white text-sm mx-4">Users</Link>
                <a href="#" className="text-white text-sm mx-4">Settings</a>
            </div>
        </div>
    );
};

export default AdminHeader;
