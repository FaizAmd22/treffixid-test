import Skeleton from "@/components/skeleton/Skeleton";
import { userInterface } from "@/interface/userInterface";
import { useEffect, useState } from "react";

const Users = () => {
  const [userData, setUserData] = useState<userInterface | null>(null);

  useEffect(() => {
    const initialData = {
      name: "Asep Gunawan",
      phoneNumber: "081383610802",
      email: "asep@gmail.com",
      fleetGroup: "Balaraja",
      employment: "Part-Time",
      workingHour: "9:00 - 17:00",
      vehicle: "B-1234-VCE",
      status: "Moving",
    };

    const storedData = localStorage.getItem("userDetails");
    if (!storedData) {
      localStorage.setItem("userDetails", JSON.stringify(initialData));
      setUserData(initialData);
    } else {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Details</h2>

      <div className="grid lg:grid-cols-3 grid-cols-2 border-b py-2">
        <p className="text-gray-500">Name</p>
        <p className="text-gray-900 font-medium">
          {userData ? userData.name : Skeleton()}
        </p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-2 border-b py-2">
        <p className="text-gray-500">Phone Number</p>
        <p className="text-gray-900 font-medium">
          {userData ? userData.phoneNumber : Skeleton()}
        </p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-2 border-b py-2">
        <p className="text-gray-500">Email</p>
        <p className="text-gray-900 font-medium">
          {userData ? userData.email : Skeleton()}
        </p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-2 border-b py-2">
        <p className="text-gray-500">Fleet Group</p>
        <p className="text-gray-900 font-medium">
          {userData ? userData.fleetGroup : Skeleton()}
        </p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-2 border-b py-2">
        <p className="text-gray-500">Employment</p>
        <p className="text-gray-900 font-medium">
          {userData ? userData.employment : Skeleton()}
        </p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-2 border-b py-2">
        <p className="text-gray-500">Working Hour</p>
        <p className="text-gray-900 font-medium">
          {userData ? userData.workingHour : Skeleton()}
        </p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-2 border-b py-2">
        <p className="text-gray-500">Vehicle</p>
        <p className="text-blue-500 font-medium underline cursor-pointer">
          {userData ? userData.vehicle : Skeleton()}
        </p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-2 border-b py-2">
        <p className="text-gray-500">Status</p>
        <p>
          {userData ? (
            <span className="bg-green-100 text-green-600 w-fit px-4 py-1 rounded-full text-sm font-medium">
              {userData.status}
            </span>
          ) : (
            <div className="h-5 bg-gray-300 rounded animate-pulse w-1/4"></div>
          )}
        </p>
      </div>
    </div>
  );
};

export default Users;
