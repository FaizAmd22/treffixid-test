import React, { useEffect, useState } from "react";
import dataTimeline from "@/data/timeline.json";
import { TimelineInterface } from "@/interface/timelineInterface";
import Skeleton from "@/components/skeleton/Skeleton";

const Timeline: React.FC = () => {
  const [timelineData, setTimelineData] = useState<TimelineInterface[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!localStorage.getItem("timelineData")) {
      localStorage.setItem("timelineData", JSON.stringify(dataTimeline));
    }
    setTimeout(() => {
      const storedData = JSON.parse(
        localStorage.getItem("timelineData") || "[]"
      );

      if (storedData) {
        setTimelineData(storedData);
        setIsLoading(false);
      }
    }, 500);
  }, []);

  if (!timelineData) {
    <div>Loading....</div>;
  }

  return (
    <>
      <h2 className="text-2xl font-semibold pb-5">Driver Activity Timeline</h2>
      <div>
        {timelineData.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between items-start py-3">
              <div className="flex items-start">
                <div
                  className={`w-3 h-3 rounded-full mt-1 mr-4 ${
                    isLoading ? "bg-gray-300 animate-pulse" : `bg-${item.color}-500`
                  }`}
                />

                <div className="font-semibold">
                  {!isLoading ? item.title : Skeleton()}
                </div>
              </div>

              <div className="text-sm text-gray-400">
                {!isLoading ? item.time : Skeleton()}
              </div>
            </div>

            <div className="flex">
              <div className="h-[100] w-3 flex justify-center items-center mr-4">
                <div className="h-full w-[2px] bg-gray-300" />
              </div>
              <div className="text-sm text-gray-500">
                {!isLoading ? item.description : Skeleton()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Timeline;
