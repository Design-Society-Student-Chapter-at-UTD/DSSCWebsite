import React from "react";
import CalendarComponent from "./CalendarComponent";
import PastEvents from "./PastEvents";

const dummyPastEvents = [
    {
        id: 1,
        title: "Past Event 1",
        date: "May 1, 2023",
        description: "This is the description for past event 1.",
    },
    {
        id: 2,
        title: "Past Event 2",
        date: "April 15, 2023",
        description: "This is the description for past event 2.",
    },
    {
        id: 3,
        title: "Past Event 3",
        date: "April 1, 2023",
        description: "This is the description for past event 3.",
    },
];

const Events = () => {
    return (
        <div className="container mx-auto p-4 space-y-10 h-screen">
            {/* Page Header */}
            <div className="bg-orange-500 my-4 p-4 w-1/6 rounded-md mx-auto">
                <h2 className="font-bold text-3xl text-center text-white">EVENTS</h2>
            </div>

            {/* Calendar Section */}
            <div className="mb-10">
                <CalendarComponent />
            </div>

            {/* Past Events Section */}
            <PastEvents events={dummyPastEvents} />
        </div>
    );
};

export default Events;
