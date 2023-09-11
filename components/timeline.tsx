"use client";

import { Briefcase, FolderKanban, GraduationCap } from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

interface TimelineProps {
  timelineElements: timelineElementData[];
}

const Timeline: React.FC<TimelineProps> = ({ timelineElements }) => {
  const elementTypeStyles = {
    work: {
      icon: <Briefcase color="white" />,
    },
    education: {
      icon: <GraduationCap color="white" />,
    },
    freelance: {
      icon: <FolderKanban color="white" />,
    },
  };

  if (!timelineElements) {
    return (
      <div className="flex justify-center m-10 text-lg text-gray-400">
        Nothing to show
      </div>
    );
  }
  return (
    <VerticalTimeline>
      {timelineElements.map((element) => (
        <VerticalTimelineElement
          key={element.id}
          date={element.date}
          iconStyle={{ background: "black" }}
          icon={elementTypeStyles[element.icon].icon}
        >
          <div className="flex flex-row justify-between">
            <div>
              <h3 className="sm:text-lg md:text-xl font-bold">
                {element.title}
              </h3>
              <h5 className="sm:text-sm md:text-base text-gray-400">
                {element.company} | {element.location}
              </h5>
            </div>

            <img
              className="m-3"
              src={element.logoUrl}
              height={100}
              width={100}
              alt={element.company}
            />
          </div>

          <p className="sm:text-sm md:text-base">{element.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
