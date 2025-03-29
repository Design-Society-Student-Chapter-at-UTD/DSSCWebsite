import React from "react";
import EventCard from "./EventCard";

const PastEvents = ({ events }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Past Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default PastEvents;
