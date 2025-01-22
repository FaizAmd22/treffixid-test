import BehaviorCard from "@/components/behavior-card/BehaviorCard";
import dataBehavior from "@/data/driverBehavior.json";

const DriveBehavior = () => {
  return (
    <div className="px-10">
      <h2 className="text-2xl font-semibold pb-5">All Driver Behavior</h2>

      <div className="grid lg:grid-cols-4 gap-10">
        {dataBehavior.map((monthData, index) => (
          <div className="col-span-1 bg-white rounded-lg box-shadow p-8">
            <p className="text-2xl uppercase font-bold mb-3">{monthData.months}</p>
            <BehaviorCard
              key={index}
              data={monthData}
              previousPercentage={
                index > 0 ? dataBehavior[index - 1].percentage : undefined
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DriveBehavior;
