import React from "react";

const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-bold mb-1">{event.title}</h3>
      <p className="text-sm text-gray-700 mb-1">{event.date}</p>
      <p className="text-sm text-gray-600">{event.description}</p>
    </div>
    // <div className="flex items-center gap-4">
    //   <div className="bg-gray border border-indigo w-1/4 h-44 rounded-md shadow-md flex items-center justify-center">
    //     <p className=" font-md">Image</p>
    //   </div>
    //   <div className="bg-gray border border-black w-28 px-3 py-3 rounded-sm shadow-md mt-[-108px] ml-7">
    //     <p className="font-bold">{event.title}</p>
    //   </div>
    //   <p className="text-sm text-left -ml-32">
    //     {event.description}
    //     <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //   </p>
    // </div>
  );
};

export default EventCard;
