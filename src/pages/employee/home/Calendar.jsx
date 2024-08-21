import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import calendar styles
import "./CalendarComponent.css"; // Import custom styles

const events = {
  "2024-08-21": ["Meeting with Bob at 10:00 AM"],
  "2024-08-22": ["Project Deadline"],
  "2024-08-23": ["Lunch with Alice at 12:00 PM", "Call with Sarah at 3:00 PM"],
};

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setSelectedDate(newDate.toISOString().split("T")[0]); // Format date to YYYY-MM-DD
  };

  const getEvents = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    return events[formattedDate] || [];
  };

  return (
    <>
      <section>
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-8">
              <Calendar
                onChange={handleDateChange}
                value={date}
                className="react-calendar"
              />
            </div>
            <div className="col-lg-4">
              <div className="events">
                <h2>Events</h2>
                {selectedDate && (
                  <div>
                    <h3>{selectedDate}</h3>
                    <ul>
                      {getEvents(date).length > 0 ? (
                        getEvents(date).map((event, index) => (
                          <li key={index}>{event}</li>
                        ))
                      ) : (
                        <li>No events for this day</li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CalendarComponent;
