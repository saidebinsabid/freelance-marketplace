import React from 'react';
import logo from '/logo.png'
import { Link } from 'react-router';
const Logo = () => {
    return (
        <div className="flex justify-center items-center gap-2 py-1">
            {/* Logo SVG */}
            <img src={logo} alt="Logo" className="w-10"/>
            {/* Brand Name */}
            <Link
              to="/"
              className="text-2xl font-semibold text-white"
            >
              Kaj<span className="text-indigo-500">Kori</span>.com
            </Link>
          </div>
    );
};

export default Logo;