import React from "react";

const CalendarComponent = () => {
    return (
        <div className="w-full h-96 overflow-hidden rounded-lg shadow-md">
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
    );
};

export default CalendarComponent;
