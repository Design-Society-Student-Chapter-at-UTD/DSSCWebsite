import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaTelegram, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer
            className="bg-[#e8a087] text-white py-8 px-4 flex flex-col md:flex-row justify-between items-center font-sans static bottom-0 left-0 right-0">
            {/* Left Section (Optional Logo) */}
            <div className="flex items-center mb-4 md:mb-0">
                <img
                    src="/assets/UTD_Logo.png"
                    alt="UTD Logo"
                    className="h-48"
                />
            </div>

            {/* Quick Links & Info */}
            <div className="flex flex-col items-center text-center">
                <h1 className="text-xl font-bold m-1">
                    Design Society Student Chapter
                </h1>
                <h1 className="text-xl font-bold m-1">
                    at the University of Texas at Dallas
                </h1>
                <div className="flex gap-8 my-2">
                    <Link to="/AboutUs" className="hover:text-orange-500">
                        About Us
                    </Link>
                    <Link to="/Events" className="hover:text-orange-500">
                        Events
                    </Link>
                    <Link to="/Membership" className="hover:text-orange-500">
                        Membership
                    </Link>
                    <Link to="/Gallery" className="hover:text-orange-500">
                        Gallery
                    </Link>
                    <Link to="/Resources" className="hover:text-orange-500">
                        Resources
                    </Link>
                </div>
                <h3 className="mt-2">Contact Us</h3>
                <div className="flex gap-4 mt-2">
                    <a href="#" className="text-2xl hover:opacity-80">
                        <FaFacebook/>
                    </a>
                    <a href="#" className="text-2xl hover:opacity-80">
                        <FaTwitter/>
                    </a>
                    <a href="#" className="text-2xl hover:opacity-80">
                        <FaTelegram/>
                    </a>
                    <a href="#" className="text-2xl hover:opacity-80">
                        <FaInstagram/>
                    </a>
                </div>
            </div>

            {/* Right Section (Optional Logo) */}
            <div className="flex items-center mt-4 md:mt-0">
                <img
                    src="/assets/designsocworld_logo.jpg"
                    alt="Website Logo"
                    className="h-48 rounded-full"
                />
            </div>
        </footer>
    );
};

export default Footer;
