import React, { useEffect, useState } from "react";
import { Line } from "rc-progress";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";
import { BehaviorCardProps } from "@/interface/behaviorInterface";

const BehaviorCard: React.FC<BehaviorCardProps> = ({
  data,
  previousPercentage,
}) => {
  const [percentageChange, setPercentageChange] = useState<number>(0);
  const [changeDirection, setChangeDirection] = useState<
    "increase" | "decrease" | "no-change"
  >("no-change");

  useEffect(() => {
    if (previousPercentage !== undefined) {
      const change =
        ((data.percentage - previousPercentage) / previousPercentage) * 100;
      setPercentageChange(change);

      if (change > 0) {
        setChangeDirection("increase");
      } else if (change < 0) {
        setChangeDirection("decrease");
      } else {
        setChangeDirection("no-change");
      }
    } else {
      setPercentageChange(data.percentage);
      setChangeDirection("increase");
    }
  }, [data.percentage, previousPercentage]);

  return (
    <>
      <p className="text-gray-500 text-2xl">{data.total_trips} Trips</p>

      <div className="flex items-center mt-2 gap-3">
        <h3 className="text-4xl font-bold">{data.percentage.toFixed(1)}%</h3>
        <div>
          {changeDirection === "increase" ? (
            <div className="w-fit px-2 flex justify-center items-center text-green-500 bg-green-50 border-2 border-green-500 rounded-full">
              <FaChevronUp className="bg-transparent" />
              <span className="ml-1 bg-transparent">
                {percentageChange.toFixed(1)}%
              </span>
            </div>
          ) : changeDirection === "decrease" ? (
            <div className="w-fit px-2 flex justify-center items-center text-red-500 bg-red-50 border-2 border-red-500 rounded-full">
              <FaChevronDown className="bg-transparent" />
              <span className="ml-1 bg-transparent">
                {Math.abs(percentageChange).toFixed(1)}%
              </span>
            </div>
          ) : (
            <div className="w-fit px-2 flex justify-center items-center text-gray-500 bg-gray-50 border-2 border-gray-500 rounded-full">
              <span className="ml-1 bg-transparent">0%</span>
            </div>
          )}
          <p className="text-gray-500">vs last month</p>
        </div>
      </div>

      <div className="mt-4">
        <Line
          percent={data.percentage}
          strokeWidth={8}
          strokeColor="#1DBF73"
          trailColor="#D9D9D9"
          trailWidth={8}
          strokeLinecap="round"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6 text-center">
        {data.dataMetric.map((metric, index) => (
          <div key={index} className="flex gap-4">
            <p className="font-semibold text-gray-800 w-fit bg-slate-100 p-2 px-3 rounded-lg">
              {metric.point}
            </p>
            <p className="text-gray-500">{metric.label}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default BehaviorCard;
