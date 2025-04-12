import React, { useRef } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {motion} from "framer-motion";
const Gallery = () => {
  const winnerSliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const designChallengeWinners = [
    {
      title: "Work 1",
      studentName: "Alice Johnson",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      year: 2022,
    },
    {
      title: "Work 2",
      studentName: "Bob Brown",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      year: 2021,
    },
  ];

  const studentWorkProjects = [
    {
      projectName: "Project Title 1",
      designer: "Student Name 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      projectName: "Project Title 2",
      designer: "Student Name 2",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      projectName: "Project Title 3",
      designer: "Student Name 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      projectName: "Project Title 4",
      designer: "Student Name 4",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <div className="mt-5 flex flex-col">
      <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }} 
      className="bg-[#e8a087] w-80 rounded-r-2xl pl-8 p-4 text-2xl text-white font-bold">
        GALLERY
      </motion.div>

      <motion.div 
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }} 
      className="w-3/4 mx-auto pt-12">
        <Slider {...settings}>
          {designChallengeWinners.map((project, index) => (
            <div key={index}>
              <div className="bg-[#d9d9d9] border border-indigo p-4 rounded-xl shadow-md text-center relative h-[400px]">
                <div className="text-black text-xl font-normal text-left absolute top-4 left-4">
                  Design Challenge {project.year}
                </div>
                <div className="text-black text-4xl font-normal absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  {project.title}
                </div>
                <div className="text-black text-xl font-normal text-right absolute bottom-4 right-4">
                  {project.studentName}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>

      <div className="pt-15 mt-16 bg-[#5c9eac]/50 shadow-md border-black">
        <div className="flex justify-center items-center w-full">
          <div className=" bg-[#336274] shadow-md rounded-2xl text-center sm:px-6 lg:px-8 py-3  text-white text-4xl font-bold m-12">
            Student Work Showcase
          </div>
        </div>
        <div className="relative w-3/4 mx-auto pb-16">
          <Slider {...settings} ref={winnerSliderRef}>
            {studentWorkProjects.map((project, index) => (
              <div
                key={index}
                className="grid grid-cols-2 gap-4 items-center p-6 bg-[#d9d9d9] rounded-xl shadow-md"
              >
                <div className="h-[200px] bg-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-lg">
                    Image Placeholder
                  </span>
                </div>

                <div className="flex flex-col space-y-4">
                  <div className="p-4 bg-white rounded-lg shadow border border-gray-300">
                    <span className="text-black text-xl font-semibold">
                      {project.projectName}
                    </span>{" "}
                    - <span className="text-gray-600">{project.designer}</span>
                    <p className="pt-2 text-black text-base">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style jsx>{`
        .slick-dots {
          position: relative;
          bottom: 0;
          margin-top: 20px;
          margin-bottom: 20px;
          display: flex !important;
          justify-content: center;
          align-items: center;
          list-style: none;
          padding: 0;
        }
        .slick-dots li {
          margin: 0 5px;
        }
        .slick-dots li button:before {
          font-size: 12px;
        }
        .slick-prev {
          left: -35px;
        }
        .slick-next {
          right: -35px;
        }
        .slick-prev:before,
        .slick-next:before {
          color: black;
          font-size: 30px;
        }
        @media (max-width: 640px) {
          .slick-prev {
            left: -25px;
          }
          .slick-next {
            right: -25px;
          }
        }
      `}</style>
    </div>
  );
};

export default Gallery;
