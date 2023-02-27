import { useState } from "react";
import React from "react";
import "../styles/styles.css";

const events = [
  {
    date: "2018",
    title: "Company founded",
    description:
      "Lorem Ipsum comes from a latin text written in 45BC by Roman statesman, lawyer, scholar, and philosopher, Marcus Tullius Cicero. The text is titled de Finibus Bonorum et Malorum",
  },
  {
    date: "2019",
    title: "M joins the company",
    description:
      "de Finibus Bonorum et Malorum which means The Extremes of Good and Evil The most common form of Lorem ipsum is the following.",
  },
  {
    date: "2020",
    title: "First collection",
    description:
      "Lorem Ipsum comes from a latin text written in 45BC by Roman statesman, lawyer, scholar, and philosopher, Marcus Tullius Cicero. The text is titled de Finibus Bonorum et Malorum",
  },
  {
    date: "2021",
    title: "A launches",
    description:
      "de Finibus Bonorum et Malorum which means The Extremes of Good and Evil The most common form of Lorem ipsum is the following.",
  },
  {
    date: "2022",
    title: "IPO",
    description:
      "Lorem Ipsum comes from a latin text written in 45BC by Roman statesman, lawyer, scholar, and philosopher, Marcus Tullius Cicero. The text is titled de Finibus Bonorum et Malorum",
  },
  {
    date: "2023",
    title: "Company announces further plans",
    description:
      "de Finibus Bonorum et Malorum which means The Extremes of Good and Evil The most common form of Lorem ipsum is the following.",
  },
];

// Define a functional component to render each event
function TimelineEvent({ event }) {
  return (
    <div className="timeline-event">
      <div className="timeline-event-date">{event.date}</div>
      <div className="timeline-event-title">{event.title}</div>
      <div className="timeline-event-description">{event.description}</div>
    </div>
  );
}

// Define the main timeline component
function Timeline() {
  const [selectedEvent, setSelectedEvent] = useState(events[0]);
  return (
    <div className="timeline">
      {/* Render the events along the timeline */}
      <div className="timeline-labels">
        {events.map((event, index) => (
          <div
            className="timeline-label"
            onClick={() => {
              setSelectedEvent(event);
            }}
          >
            {event.date}
          </div>
        ))}
      </div>

      {selectedEvent ? (
        <div>
          <TimelineEvent event={selectedEvent} />
        </div>
      ) : undefined}
    </div>
  );
}

export default Timeline;
