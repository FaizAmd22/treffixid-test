import Car from "@/assets/car.svg";
import Skeleton from "@/components/skeleton/Skeleton";
import { userInterface } from "@/interface/userInterface";
import React, { useEffect, useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";

interface userNavbarProps {
  openModal: () => void;
}

const UserNavbar: React.FC<userNavbarProps> = ({ openModal }) => {
  const [userData, setUserData] = useState<userInterface | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      const storedData = localStorage.getItem("userDetails");

      if (storedData) {
        setUserData(JSON.parse(storedData));
        setIsLoading(false);
      }
    }, 500);
  }, []);

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-[50px] h-[50px] lg:w-[65px] lg:h-[65px] rounded-lg box-shadow-sm">
          <img
            src={Car}
            alt="car"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div>
          <p className="font-semibold text-lg lg:text-2xl w-[250px] mb-[-2px] lg:mb-0">
            {!isLoading ? userData?.name : Skeleton()}
          </p>
          <p className="w-[250px] text-sm lg:text-base pt-2">
            {!isLoading ? userData?.phoneNumber : Skeleton()}
          </p>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-5">
        <button className="bg-white h-[50px] w-[50px] flex items-center justify-center rounded-lg box-shadow-sm">
          <HiOutlineDotsVertical size={"20px"} />
        </button>

        <button
          onClick={openModal}
          className="bg-blue-500 text-white h-[50px] px-7 rounded-lg"
        >
          Edit Driver
        </button>
      </div>
    </div>
  );
};

export default UserNavbar;
