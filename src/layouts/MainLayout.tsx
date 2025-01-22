import Navbar from "@/components/navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="py-5 h-screen overflow-hidden text-slate-600">
      <div className="px-10 h-[10vh] lg:h-[15vh]">
        <Navbar />
      </div>

      <div className="h-[87vh] lg:h-[81vh] overflow-x-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
