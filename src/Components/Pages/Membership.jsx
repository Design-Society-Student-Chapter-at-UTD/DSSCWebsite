import React from "react";
// import HandsOnEvent from "../assets/HandsOnEvent.png";
// import SocialEvent from "../assets/SocialEvent.png";
// import WorkshopEvent from "../assets/WorkshopEvent.png";
// import DesignerDesk from "../assets/DesignerDesk.png";

const Membership = () => {
    return (
        <div className="mt-5 h-screen">
            {/* Header */}
            <div className="bg-[#e8a087] w-80 rounded-2xl p-4 text-2xl text-center text-white font-bold mx-auto">
                MEMBERSHIP
            </div>

            {/* Main Content Container */}
            <div className="flex flex-col gap-8 w-3/4 mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Membership Info Section */}
                <div className="bg-[#ADCED5] rounded-lg p-6 md:p-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h1 className="bg-[#336274] rounded-2xl text-2xl sm:px-6 lg:px-8 py-3 md:text-3xl font-bold text-white mb-3">
                            Wanna be Hands-On? Become a member!
                        </h1>
                        <p className="text-lg text-slate-700">
                            Pay a yearly fee of{" "}
                            <span className="font-semibold">$5</span> to earn a variety of{" "}
                            <span className="font-semibold">exclusive perks!</span>
                        </p>
                    </div>
                    <div className="w-full md:w-1/3">
                        {/*
            <img
              src={DesignerDesk}
              alt="Designer Desk"
              className="w-full h-auto"
            />
            */}
                    </div>
                </div>

                {/* Membership Perks Grid */}
                <div>
                    <h2 className="bg-[#336274] rounded-2xl text-2xl text-center sm:px-6 lg:px-8 py-3 md:text-3xl font-bold text-white mb-3">
                        Why get a membership?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            {/*
              <img
                src={HandsOnEvent}
                alt="Hands-on Activities"
                className="w-full h-48 object-cover"
              />
              */}
                            <div className="p-4">
                                <h3 className="font-semibold text-lg mb-2">
                                    Hands-on Activities
                                </h3>
                                <p className="text-slate-600">
                                    Description lorem ipsum eisumod tempor.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            {/*
              <img
                src={SocialEvent}
                alt="Socials"
                className="w-full h-48 object-cover"
              />
              */}
                            <div className="p-4">
                                <h3 className="font-semibold text-lg mb-2">Socials</h3>
                                <p className="text-slate-600">
                                    Description lorem ipsum eisumod tempor.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            {/*
              <img
                src={WorkshopEvent}
                alt="Workshops"
                className="w-full h-48 object-cover"
              />
              */}
                            <div className="p-4">
                                <h3 className="font-semibold text-lg mb-2">Workshops</h3>
                                <p className="text-slate-600">
                                    Handpicked workshops targeted towards members.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Centered Button */}
                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mx-auto">
                    Become a Member
                </button>
            </div>
        </div>
    );
};

export default Membership;
