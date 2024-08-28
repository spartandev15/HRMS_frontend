import React, { useState } from "react";
import "./css/Notification.css"; // Ensure to create this CSS file

const Notification = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [message, setMessage] = useState([
    {
      msg: "message 1",
      id: 1,
      isVisible: true,
    },
    {
      msg: "message 2",
      id: 2,
      isVisible: true,
    },
    {
      msg: "message 3",
      id: 3,
      isVisible: true,
    },
    {
      msg: "message 4",
      id: 4,
      isVisible: true,
    },
  ]);

  const handleClose = (ID) => {
    setMessage(
      message.map((message) =>
        message.id === ID ? { ...message, isVisible: false } : message
      )
    );
  };

  return (
    <div className="notification-wrapper">
      {message
        .filter((item, i) => i < 3)
        .map((x) => {
          return (
            <div
              className={`notification-content mb-2 ${
                x.isVisible ? "" : "d-none"
              }`}
            >
              <span>{x.msg}</span>
              <i
                className="notification-close"
                onClick={() => handleClose(x.id)}
              >
                &times;
              </i>
            </div>
          );
        })}
    </div>
  );
};

export default Notification;
