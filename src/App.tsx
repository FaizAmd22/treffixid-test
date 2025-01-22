import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/dahsboard/Dashboard";
import LiveTracking from "./pages/live-trackling/LiveTracking";
import NotFound from "./pages/not-found/NotFound";
import DriveBehavior from "./pages/drive-behavior/DriveBehavior";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/live-tracking" element={<LiveTracking />} />
          <Route path="/drive-behavior" element={<DriveBehavior />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
