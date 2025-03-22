import React from "react";

const EventCard = ({ event }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-bold mb-1">{event.title}</h3>
            <p className="text-sm text-gray-700 mb-1">{event.date}</p>
            <p className="text-sm text-gray-600">{event.description}</p>
        </div>
    );
};

export default EventCard;
