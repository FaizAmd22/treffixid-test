import { useState } from "react";
import ListNavbar from "./components/ListNavbar";
import UserNavbar from "./components/UserNavbar";
import {
  HiMenu,
  HiOutlineBookmark,
  HiOutlineDotsVertical,
  HiX,
} from "react-icons/hi";
import { CiUser } from "react-icons/ci";
import { MdLockOpen } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link, useLocation } from "react-router";
import ModalEditProfile from "../modal-edit-profile/ModalEditProfile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const datas = [
    {
      icon: CiUser,
      label: "overview",
      path: "/",
    },
    {
      icon: MdLockOpen,
      label: "live tracking",
      path: "/live-tracking",
    },
    {
      icon: HiOutlineBookmark,
      label: "drive behavior",
      path: "/drive-behavior",
    },
    {
      icon: IoIosNotificationsOutline,
      label: "notifications",
      path: "/notifications",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setIsMenuOpen(!isMenuOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="w-full flex justify-between lg:block items-center">
        <UserNavbar openModal={openModal} />

        <button
          className="lg:hidden bg-gray-100 p-3 rounded-lg ml-[-70px]"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <HiX size={30} className="bg-transparent" />
          ) : (
            <HiMenu size={30} className="bg-transparent" />
          )}
        </button>
      </div>

      <div className="hidden lg:block">
        <ListNavbar />
      </div>

      <div className="w-full h-[3px] mt-[-3px] bg-gray-200 hidden lg:block" />

      {isMenuOpen && (
        <div
          className="absolute w-[90%] border-2 rounded-lg lg:hidden bg-white p-4 mt-2 right-4"
          style={{ zIndex: 9999 }}
        >
          <div className="flex flex-col gap-4">
            {datas.map((data) => {
              const isActive = location.pathname === data.path;
              return (
                <Link
                  to={data.path}
                  className={`flex pb-3 px-5 gap-2 ${
                    isActive ? "text-blue-500" : "text-gray-400"
                  }`}
                >
                  <data.icon size={"20px"} />
                  <p className="uppercase font-semibold">{data.label}</p>
                </Link>
              );
            })}
            <div className="flex gap-5">
              <button className="w-[15%] flex items-center justify-center gap-2 bg-gray-100 py-3 rounded-lg">
                <HiOutlineDotsVertical size={20} className="bg-transparent" />
              </button>
              <button
                onClick={openModal}
                className="w-[75%] bg-blue-500 text-white py-3 rounded-lg"
              >
                Edit Driver
              </button>
            </div>
          </div>
        </div>
      )}

      {isModalOpen && (
        <ModalEditProfile isOpen={isModalOpen} onClose={closeModal} />
      )}
    </>
  );
};

export default Navbar;
