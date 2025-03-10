import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="bg-[#5c9ead] p-4 flex justify-between items-center">
            <div className="flex items-center">
                <Link to="/">
                    <img
                        src="/assets/logo.png"
                        alt="Website Logo"
                        className="h-16 aspect-auto w-auto"
                    />
                </Link>
            </div>
            <div className="flex items-center space-x-8 font-semibold">
                <Link to="/AboutUs" className="bg-[#5c9ead] text-white px-4 py-2 rounded-lg hover:brightness-105 transition duration-200 hover:scale-110">
                    About Us
                </Link>
                <Link to="/Events" className="bg-[#5c9ead] text-white px-4 py-2 rounded-lg hover:brightness-105 transition duration-200 hover:scale-110">
                    Events
                </Link>
                <Link to="/Membership" className="bg-[#5c9ead] text-white px-4 py-2 rounded-lg hover:brightness-105 transition duration-200 hover:scale-110">
                    Membership
                </Link>
                <Link to="/Gallery" className="bg-[#5c9ead] text-white px-4 py-2 rounded-lg hover:brightness-105 transition duration-200 hover:scale-110">
                    Gallery
                </Link>
                <Link to="/Resources" className="bg-[#5c9ead] text-white px-4 py-2 rounded-lg hover:brightness-105 transition duration-200 hover:scale-110">
                    Resources
                </Link>
                <Link
                    to="/Sign-up"
                    className="bg-[#e39774] text-white px-4 py-2 ml-8 rounded-lg hover:brightness-105 transition duration-200 hover:scale-110"
                >
                    Sign up
                </Link>
            </div>
        </nav>
    );
};

export default Header;
