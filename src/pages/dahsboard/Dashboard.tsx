import Behavior from "./components/Behavior"
import Location from "./components/Location"
import Timeline from "./components/Timeline"
import Users from "./components/Users"

const Dashboard = () => {
  return (
    <div className='grid grid-cols-12 gap-x-3 gap-y-5 px-10 py-5'>
      <div className="lg:col-span-4 col-span-12 rounded-lg box-shadow bg-white p-8 pb-16 h-full">
        <Users />
      </div>

      <div className="lg:col-span-8 col-span-12 rounded-lg box-shadow bg-white p-8 pt-7 h-full">
        <Location />
      </div>

      <div className="lg:col-span-4 col-span-12 rounded-lg box-shadow bg-white p-8 h-full">
        <Behavior />
      </div>

      <div className="lg:col-span-8 col-span-12 rounded-lg box-shadow bg-white p-8 h-full">
        <Timeline />
      </div>
    </div>
  )
}

export default Dashboard