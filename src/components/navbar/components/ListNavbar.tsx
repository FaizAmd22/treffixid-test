import { CiUser } from "react-icons/ci";
import { MdLockOpen } from "react-icons/md";
import { HiOutlineBookmark } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const ListNavbar = () => {
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

  return (
    <div className="flex gap-10 mt-5">
      {datas.map((data) => {
        const isActive = location.pathname === data.path;

        return (
          <div key={data.label}>
            <Link
              to={data.path}
              className={`flex justify-center pb-3 px-5 items-center gap-2 ${
                isActive ? "text-blue-500" : "text-gray-400"
              }`}
            >
              <data.icon size={"20px"} />
              <p className="uppercase font-semibold">{data.label}</p>
            </Link>

            <div
              className={`h-[3px] rounded-xl ${
                isActive ? "bg-blue-500" : "bg-gray-200"
              }`}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default ListNavbar;
