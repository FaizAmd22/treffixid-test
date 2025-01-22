import BehaviorCard from "@/components/behavior-card/BehaviorCard";
import dataBehavior from "@/data/driverBehavior.json";
import { Link } from "react-router";

const Behavior = () => {
  const latestData = dataBehavior[dataBehavior.length - 1];
  const previousData =
    dataBehavior.length > 1 ? dataBehavior[dataBehavior.length - 2] : undefined;

  return (
    <div className="bg-white">
      <div className="w-full flex justify-between">
        <h2 className="text-2xl font-semibold pb-5">Driver Behavior</h2>
        <Link to={"/drive-behavior"} className="text-blue-500 hover:underline">
          See More
        </Link>
      </div>
      <BehaviorCard
        data={latestData}
        previousPercentage={previousData ? previousData.percentage : undefined}
      />
    </div>
  );
};

export default Behavior;
