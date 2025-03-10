import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import Calendar from "../assets/Calendar.png";

const Events = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    centerPadding: "0px",
    centerMode: true,
    slidesToScroll: 3,
    arrows: true,
  };

  return (
    <div>
      <div className="bg-orange my-4 p-4 w-1/6 rounded-md">
        <h2 className="font-bold text-3xl text-center text-white">EVENTS</h2>
      </div>
      <div className="flex flex-col justify-center items-center min-h-[100px] my-10">
        <div className="bg-blue p-4 w-1/4 rounded-xl shadow-md">
          <h2 className="text-center text-3xl font-bold text-white">
            Calendar
          </h2>
        </div>
        <div className="mt-4 flex flex-col justify-center items-center">
          {/*<img*/}
          {/*  src={Calendar}*/}
          {/*  alt="Calendar temp placeholder"*/}
          {/*  className="w-96 h-auto"*/}
          {/*/>*/}
        </div>
      </div>
      <div className="my-10 bg-[#5c9eac]/50 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border-black rounded-lg">
        <div className="flex justify-center items-center min-h-[80px] pt-8">
          <div className="bg-blue p-4 w-1/4 rounded-xl shadow-md">
            <h2 className="text-center text-3xl font-bold text-white">
              Upcoming Events
            </h2>
          </div>
        </div>
        <div className="pl-32 h-96 pt-10">
          <Slider {...settings}>
            <div>
              <div className="bg-gray border border-indigo p-4 w-60 rounded-xl shadow-md text-center">
                <h3 className="text-lg font-bold">Event Title</h3>
                <h2>3/4 at 5PM</h2>
                <h2>in SCI 1.201</h2>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor. Lorem ipsum dolor sit amet. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor.
                </p>
                <button className="mt-4 border border-indigo shadow-lg font-bold bg-orange text-black py-1 px-4 rounded-md">
                  RSVP
                </button>
              </div>
            </div>
            <div>
              <div className="bg-gray border border-indigo-600 p-4 w-60 rounded-xl shadow-md text-center">
                <h3 className="text-lg font-bold">Event Title</h3>
                <h2>4/17 at 5PM</h2>
                <h2>in SCI 1.201</h2>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor. Lorem ipsum dolor sit amet. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor.
                </p>
                <button className="mt-4 border border-indigo-600 shadow-lg font-bold bg-orange text-black py-1 px-4 rounded-md">
                  RSVP
                </button>
              </div>
            </div>
            <div>
              <div className="bg-gray border border-indigo-600 p-4 w-60 rounded-xl shadow-md text-center">
                <h3 className="text-lg font-bold">Event Title</h3>
                <h2>5/21 at 5PM</h2>
                <h2>in SCI 1.201</h2>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor. Lorem ipsum dolor sit amet. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor.
                </p>
                <button className="mt-4 border border-indigo shadow-lg font-bold bg-orange text-black py-1 px-4 rounded-md">
                  RSVP
                </button>
              </div>
            </div>
          </Slider>
        </div>
        <style>{`
          .slick-dots {
            bottom: -35px;
            right: 60px; 
          }
          .slick-prev {
            left: -80px; 
            z-index: 2; 
          }
          .slick-next {
            right: 60px;
            z-index: 2;
          }
          .slick-prev:before,
          .slick-next:before {
            color: white; 
            font-size: 30px; 
          }
        `}</style>
      </div>
      <div className="flex justify-center items-center min-h-[100px] my-8">
        <div className="bg-blue p-4 w-1/4 rounded-xl shadow-md">
          <h2 className="text-center text-3xl font-bold text-white">
            Past Events
          </h2>
        </div>
      </div>
      <div className="flex flex-col ps-44 gap-6">
        <div className="flex items-center gap-4">
          <div className="bg-gray border border-indigo w-1/4 h-44 rounded-md shadow-md flex items-center justify-center">
            <p className="font-md">Image</p>
          </div>
          <div className="bg-gray border border-black w-28 px-3 py-3 rounded-sm shadow-md mt-[-108px] ml-7">
            <p className="font-bold">Event Title</p>
          </div>
          <p className="text-sm text-left -ml-32">
            This is a short description of the past event. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
            <p> Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.</p>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-gray border border-indigo w-1/4 h-44 rounded-md shadow-md flex items-center justify-center">
            <p className=" font-md">Image</p>
          </div>
          <div className="bg-gray border border-black w-28 px-3 py-3 rounded-sm shadow-md mt-[-108px] ml-7">
            <p className="font-bold">Event Title</p>
          </div>
          <p className="text-sm text-left -ml-32">
            This is a short description of the past event. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
            <p> Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.</p>
          </p>
        </div>
        <div className="flex items-center gap-4 pb-10">
          <div className="bg-gray w-1/4 border border-indigo h-44 rounded-md shadow-md flex items-center justify-center">
            <p className="font-md">Image</p>
          </div>
          <div className="bg-gray border border-black w-28 px-3 py-3 rounded-sm shadow-md mt-[-108px] ml-7">
            <p className="font-bold">Event Title</p>
          </div>
          <p className="text-sm text-left -ml-32">
            This is a short description of the past event. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
            <p> Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Events;
