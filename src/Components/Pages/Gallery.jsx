import React, { useRef } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                position: "absolute",
                left: "-80px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
            }}
            onClick={onClick}
        >
            <FaArrowLeft color="orange" size={30} />
        </div>
    );
};

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                position: "absolute",
                right: "-80px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
            }}
            onClick={onClick}
        >
            <FaArrowRight color="orange" size={30} />
        </div>
    );
};

const Gallery = () => {
    const winnerSliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
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
            {/* Embedded minimal Slick Carousel CSS */}
            <style>{`
        .slick-slider {
          position: relative;
          display: block;
          box-sizing: border-box;
          user-select: none;
          touch-action: pan-y;
        }
        .slick-list {
          overflow: hidden;
          margin: 0;
          padding: 0;
        }
        .slick-track {
          display: flex;
          transition: transform 0.4s ease;
        }
        .slick-slide {
          flex-shrink: 0;
          height: auto;
          outline: none;
        }
        .slick-dots {
          display: block;
          position: absolute;
          bottom: -35px;
          width: 100%;
          padding: 0;
          margin: 0;
          list-style: none;
          text-align: center;
        }
        .slick-dots li {
          display: inline-block;
          margin: 0 5px;
        }
        .slick-dots li button {
          font-size: 0;
          line-height: 0;
          display: block;
          width: 10px;
          height: 10px;
          padding: 5px;
          cursor: pointer;
          background: #ccc;
          border: none;
          border-radius: 50%;
        }
        .slick-dots li.slick-active button {
          background: #333;
        }
      `}</style>

            {/* Header */}
            <div className="bg-[#e8a087] w-80 rounded-r-2xl pl-8 p-4 text-2xl text-white font-bold">
                GALLERY
            </div>

            {/* Design Challenge Winners Slider */}
            <div className="w-3/4 mx-auto pt-12">
                <Slider {...settings}>
                    {designChallengeWinners.map((project, index) => (
                        <div key={index}>
                            <div className="bg-[#d9d9d9] border border-indigo-500 p-4 rounded-xl shadow-md text-center relative h-[400px]">
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
            </div>

            {/* Student Work Showcase Slider */}
            <div className="pt-15 mt-16 bg-[#5c9eac]/50 shadow-md border border-black">
                <div className="flex justify-center items-center w-full">
                    <div className="bg-[#336274] shadow-md rounded-2xl text-center sm:px-6 lg:px-8 py-3 text-white text-5xl font-bold m-12">
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
        </div>
    );
};

export default Gallery;
