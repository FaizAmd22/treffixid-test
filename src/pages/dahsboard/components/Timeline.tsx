import React, { useEffect, useState } from "react";
import dataTimeline from "@/data/timeline.json";
import { TimelineInterface } from "@/interface/timelineInterface";

const Timeline: React.FC = () => {
  const [timelineData, setTimelineData] = useState<TimelineInterface[]>([]);

  useEffect(() => {
    if (!localStorage.getItem("timelineData")) {
      localStorage.setItem("timelineData", JSON.stringify(dataTimeline));
    }

    const storedData = JSON.parse(localStorage.getItem("timelineData") || "[]");
    setTimelineData(storedData);
  }, []);

  return (
    <>
      <h2 className="text-2xl font-semibold pb-5">Driver Activity Timeline</h2>
      <div>
        {timelineData.map((item, index) => (
          <>
            <div key={index} className="flex justify-between items-start py-3">
              <div className="flex items-start">
                <div
                  className={`w-3 h-3 rounded-full mt-1 mr-4 ${
                    item.color && item.color
                  }`}
                />

                <div className="font-semibold">{item.title}</div>
              </div>

              <div className="text-sm text-gray-400">{item.time}</div>
            </div>

            <div className="flex">
              <div className="h-[100] w-3 flex justify-center items-center mr-4">
                <div className="h-full w-[2px] bg-gray-300" />
              </div>
              <div className="text-sm text-gray-500">{item.description}</div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Timeline;
