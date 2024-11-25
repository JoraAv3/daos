import React from "react";
import "./index.css";

const Events: React.FC = () => {
  return (
    <div className="events-page">
      <a
        href="https://x.com/OpenSourceIsFun" 
        target="_blank"
        rel="noopener noreferrer"
        className="event-block"
      >
        <div className="event-header">Upcoming</div>
        <div className="event-content">
          <img
            src="../src/assets/event.png" 
            alt="DESCI Wave Summit"
            className="event-image"
          />
        </div>
      </a>
    </div>
  );
};

export default Events;
