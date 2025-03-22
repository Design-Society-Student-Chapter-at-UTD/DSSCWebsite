// src/pages/Home.jsx
import React from "react";

const Home = () => {
    return (
        <section className="bg-gray-100 p-16 font-sans">
            {/* Hero Section */}
            <div className="relative w-full rounded-lg overflow-hidden">
                <img
                    src="/images/HeroImage.jpg"
                    alt="Design Image"
                    className="w-full h-auto object-cover block"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <p className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[10vh] text-center w-full font-mono">
                    Welcome to Design Society Student Chapter!
                </p>
                <p className="absolute top-4/6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[10vh] text-center w-full font-mono">
                    We foster creativity and collaboration among design enthusiasts.
                </p>


            </div>

            {/* Sections Container */}
            <div className="flex flex-wrap justify-around mt-16 gap-8">
                {/* About Us */}
                <div
                    className="bg-white p-8 flex-1 max-w-md shadow-md rounded-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
                    <h3 className="text-2xl text-blue-600 mb-4">About Us</h3>
                    <p className="text-base text-gray-700 leading-relaxed">
                        Learn more about our mission and team.
                    </p>
                </div>

                {/* Events */}
                <div className="bg-white p-8 flex-1 max-w-md shadow-md rounded-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
                    <h3 className="text-2xl text-blue-600 mb-4">Events</h3>
                    <p className="text-base text-gray-700 leading-relaxed">
                        Check out our upcoming events and activities.
                    </p>
                </div>

                {/* Membership */}
                <div className="bg-white p-8 flex-1 max-w-md shadow-md rounded-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
                    <h3 className="text-2xl text-blue-600 mb-4">Membership</h3>
                    <p className="text-base text-gray-700 leading-relaxed">
                        Join us and be part of our vibrant community.
                    </p>
                </div>

                {/* Gallery */}
                <div className="bg-white p-8 flex-1 max-w-md shadow-md rounded-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
                    <h3 className="text-2xl text-blue-600 mb-4">Gallery</h3>
                    <p className="text-base text-gray-700 leading-relaxed">
                        Get inspired by seeing winning projects from our design challenge.
                    </p>
                </div>

                {/* Resources */}
                <div className="bg-white p-8 flex-1 max-w-md shadow-md rounded-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
                    <h3 className="text-2xl text-blue-600 mb-4">Resources</h3>
                    <p className="text-base text-gray-700 leading-relaxed">
                        Learn more by viewing recommended resources.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Home;
