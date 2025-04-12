import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
const Events = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "40px",
        },
      },
    ],
  };

  const upcomingEvents = [
    {
      title: "Event Title 1",
      date: "3/4 at 5PM",
      location: "SCI 1.201",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet.",
    },
    {
      title: "Event Title 2",
      date: "4/17 at 5PM",
      location: "SCI 1.201",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet.",
    },
    {
      title: "Event Title 3",
      date: "5/21 at 5PM",
      location: "SCI 1.201",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet.",
    },
    {
      title: "Event Title 4",
      date: "6/15 at 5PM",
      location: "SCI 1.201",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet.",
    },
  ];

  const pastEvents = [
    {
      title: "Past Event 1",
      description:
        "This is a short description of the past event. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Past Event 2",
      description:
        "This is a short description of the past event. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Past Event 3",
      description:
        "This is a short description of the past event. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="pt-15 mt-5">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-[#e8a087] w-80 rounded-r-2xl pl-8 p-4 text-2xl text-white font-bold"
      >
        EVENTS
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col justify-center items-center min-h-[100px] my-10">
          <h2 className="bg-blue p-4 w-1/4 rounded-xl shadow-md text-center text-4xl font-bold text-white">
            Calendar
          </h2>
          <div className="w-4/6 h-96 mt-10 overflow-hidden rounded-lg shadow-md">
            <iframe
              title="Google Calendar"
              src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&showPrint=0&src=dG1hMjMwMDAyQGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=a3FvczAyZ2wwbjZ0MWx0dnMxaXBvbnVrZmpxcWo3azBAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%2333B679&color=%230B8043&color=%23be0300"
              style={{ border: 0 }}
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>

        <div className="pt-15 mt-16 bg-[#5c9eac]/50 shadow-md border-black">
          <div className="flex justify-center items-center w-full">
            <div className="bg-[#336274] shadow-md rounded-2xl text-center sm:px-6 lg:px-8 py-3 text-white text-4xl font-bold m-12">
              Upcoming Events
            </div>
          </div>
          <div className="relative w-3/4 mx-auto pb-16">
            <Slider {...sliderSettings}>
              {upcomingEvents.map((event, index) => (
                <div key={index} className="px-4">
                  <div className="bg-gray border border-gray-800 p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold text-center">
                      {event.title}
                    </h3>
                    <div className="text-center my-2">
                      <p>{event.date}</p>
                      <p>{event.location}</p>
                    </div>
                    <p className="text-sm text-gray-700 my-4">
                      {event.description}
                    </p>
                    <div className="flex justify-center">
                      <button className="mt-2 border border-black shadow-lg font-bold bg-[#e8a087] text-black py-1 px-6 rounded-md">
                        RSVP
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="pt-15 mt-16  shadow-md border-black">
          <div className="flex justify-center items-center w-full">
            <div className="bg-[#336274] shadow-md rounded-2xl text-center sm:px-6 lg:px-8 py-3 text-white text-4xl font-bold m-12">
              Past Events
            </div>
          </div>
          <div className="relative w-3/4 mx-auto pb-16">
            <div className="flex flex-col gap-6">
              {pastEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-start gap-4 p-6 rounded-xl shadow-md"
                >
                  <div className="bg-gray border border-indigo w-1/4 h-44 rounded-md shadow-md flex items-center justify-center">
                    <p className="font-md">Image</p>
                  </div>

                  <div className="flex-1 relative">
                    <div className="bg-white border border-black w-36 px-3 py-2 rounded-sm shadow-md -mt-4 md:mt-0 md:ml-6">
                      <p className="font-bold text-center">{event.title}</p>
                    </div>
                    <div className="mt-3 md:mt-6">
                      <p className="text-sm md:text-base mt-2">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          .slick-prev:before,
          .slick-next:before {
            color: black;
            font-size: 24px;
          }
          .slick-prev {
            left: -40px;
          }
          .slick-next {
            right: -40px;
          }
        `}</style>
      </motion.div>
    </div>
  );
};

export default Events;
