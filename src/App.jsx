import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Water from "./pages/Water";
import BMI from "./pages/BMI";
import Workout from "./pages/Workout";
import Diet from "./pages/Diet";
import Sleep from "./pages/Sleep";
import Progress from "./pages/Progress";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/water" element={<Water />} />
        <Route path="/bmi" element={<BMI />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/sleep" element={<Sleep />} />
        <Route path="/progress" element={<Progress />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;