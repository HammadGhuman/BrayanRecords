"use client";

import React, { useState } from "react";

const Calendar = () => {
  const data = [
    {
      day: "Sun Feb 11 2024",
      slots: [
        "5:00 to 6:00 --- 2024-02-11T14:14:40.996Z ",
        "6:00 to 7:00 --- 2024-02-11T14:14:40.996Z ",
      ],
    },
    {
      day: "Mon Feb 12 2024",
      slots: [
        "18:00 to 19:00 --- 2024-02-12T14:14:40.996Z ",
        "17:00 to 18:00 --- 2024-02-12T14:14:40.996Z ",
      ],
    },
    {
      day: "Tue Feb 13 2024",
      slots: [
        "21:00 to 22:00 --- 2024-02-13T14:14:40.996Z ",
        "18:00 to 19:00 --- 2024-02-13T14:14:40.996Z ",
      ],
    },
    {
      day: "Wed Feb 14 2024",
      slots: [
        "20:00 to 21:00 --- 2024-02-14T14:14:40.996Z ",
        "21:00 to 22:00 --- 2024-02-14T14:14:40.996Z ",
      ],
    },
    {
      day: "Thu Feb 15 2024",
      slots: [
        "20:00 to 21:00 --- 2024-02-15T14:14:40.996Z ",
        "21:00 to 22:00 --- 2024-02-15T14:14:40.996Z ",
      ],
    },
    {
      day: "Fri Feb 16 2024",
      slots: [
        "20:00 to 21:00 --- 2024-02-16T14:14:40.996Z ",
        "21:00 to 22:00 --- 2024-02-16T14:14:40.996Z ",
      ],
    },
    {
      day: "Sat Feb 17 2024",
      slots: [
        "20:00 to 21:00 --- 2024-02-17T14:14:40.996Z ",
        "21:00 to 22:00 --- 2024-02-17T14:14:40.996Z ",
      ],
    },
  ];

  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayClick = (day: any) => {
    setSelectedDay(day);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center my-8">
        {data.map((item) => (
          <div key={item.day} className="mx-2">
            <button
              className={`p-2 rounded ${
                selectedDay === item.day
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => handleDayClick(item.day)}
            >
              {item.day}
            </button>
          </div>
        ))}
      </div>

      {selectedDay && (
        <div className="mx-auto max-w-md">
          <h2 className="text-xl font-bold mb-4">
            Available Slots for {selectedDay}
          </h2>
          {data
            .find((item) => item.day === selectedDay)
            ?.slots.map((slot, index) => (
              <div key={index} className="mb-2">
                {slot}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Calendar;
