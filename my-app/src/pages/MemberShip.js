import React from "react";
import HandsOnEvent from "../assets/HandsOnEvent.png";
import SocialEvent from "../assets/SocialEvent.png";
import WorkshopEvent from "../assets/WorkshopEvent.png";

const Membership = () => {
  return (
    <div className="mt-5">
      <div className="bg-[#e8a087] w-80 rounded-r-2xl pl-8 p-4 text-2xl text-white font-bold">
        MEMBERSHIP
      </div>

      <div className="m-6">
        <div className="bg-[#ADCED5] p-4 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-6 min-h-full">
            <div className="md:col-span-1 m-4">
              <div className=" bg-[#336274] p-4 rounded-2xl text-2xl text-white font-bold">
                (Catchy Line)
              </div>
              <div className="rounded-2xl ml-1 mt-4 text-md text-black">
                Pay a yearly fee of $5 to earn a variety of
              </div>
              <div className="rounded-2xl ml-1 text-md text-black font-bold">
                exclusive perks!
              </div>
              <button className=" bg-[#E39775] mt-4 w-60 p-2 rounded-2xl text-md text-black">
                Become a Member
              </button>
            </div>
            <div className="md:col-span-1  m-4 "></div>
          </div>
        </div>
      </div>
      <div className=" bg-[#336274] p-3 mt-10 ml-40 mr-40 rounded-2xl text-center text-2xl text-white">
        Why get a membership?
      </div>
      <div className="h-full mb-4 flex flex-col space-y-20">
        <div className="grid md:grid-cols-3 gap-6 min-h-full">
          <div className="md:col-span-1  p-4">
            <img
              src={HandsOnEvent}
              alt="Hands-on Event"
              className="w-auto m-2 "
            />
            <div className="rounded-2xl text-center ml-1 text-lg text-black font-bold">
              Hands-on Activites
            </div>
            <div className="rounded-2xl text-center ml-1 text-md text-black">
              Description lorem ipsum eisumod tempor.
            </div>
          </div>

          <div className="md:col-span-1  p-4">
            <img src={SocialEvent} alt="Social Event" className="w-auto m-2" />
            <div className="rounded-2xl text-center ml-1 text-lg text-black font-bold">
              Socials
            </div>
            <div className="rounded-2xl text-center ml-1 text-md text-black">
              Description lorem ipsum eisumod tempor.
            </div>
            <button className=" bg-[#E39775] shadow-lg text-center mt-4 w-60 p-2 rounded-2xl text-md text-black">
              Become a Member
            </button>
          </div>

          <div className="md:col-span-1  p-4">
            <img
              src={WorkshopEvent}
              alt="Workshop Event"
              className="w-auto m-2"
            />
            <div className="rounded-2xl text-center ml-1 text-lg text-black font-bold">
              Workshops
            </div>
            <div className="rounded-2xl text-center ml-1 text-md text-black">
              Handpicked workshops targeted towards members.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
