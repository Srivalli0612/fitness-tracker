import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 pt-24 px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Welcome to Your Fitness Dashboard 💪
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          <div 
            onClick={() => navigate("/water")}
            className="bg-white p-8 rounded-2xl shadow-xl cursor-pointer hover:scale-105 hover:shadow-2xl transition duration-300 text-center"
          >
            <h3 className="text-xl font-semibold">💧 Water Reminder</h3>
            <p className="text-gray-500 mt-2">Stay hydrated throughout the day</p>
          </div>

          <div 
            onClick={() => navigate("/bmi")}
            className="bg-white p-8 rounded-2xl shadow-xl cursor-pointer hover:scale-105 hover:shadow-2xl transition duration-300 text-center"
          >
            <h3 className="text-xl font-semibold">📏 BMI Calculator</h3>
            <p className="text-gray-500 mt-2">Check your body mass index</p>
          </div>

          <div 
            onClick={() => navigate("/workout")}
            className="bg-white p-8 rounded-2xl shadow-xl cursor-pointer hover:scale-105 hover:shadow-2xl transition duration-300 text-center"
          >
            <h3 className="text-xl font-semibold">🏋 Workout Plan</h3>
            <p className="text-gray-500 mt-2">Personalized exercise routines</p>
          </div>

          <div 
            onClick={() => navigate("/diet")}
            className="bg-white p-8 rounded-2xl shadow-xl cursor-pointer hover:scale-105 hover:shadow-2xl transition duration-300 text-center"
          >
            <h3 className="text-xl font-semibold">🥗 Diet Plan</h3>
            <p className="text-gray-500 mt-2">Nutrition guidance based on BMI</p>
          </div>

          <div 
            onClick={() => navigate("/sleep")}
            className="bg-white p-8 rounded-2xl shadow-xl cursor-pointer hover:scale-105 hover:shadow-2xl transition duration-300 text-center"
          >
            <h3 className="text-xl font-semibold">😴 Sleep Tracker</h3>
            <p className="text-gray-500 mt-2">Monitor your sleep cycle</p>
          </div>

          <div 
            onClick={() => navigate("/progress")}
            className="bg-white p-8 rounded-2xl shadow-xl cursor-pointer hover:scale-105 hover:shadow-2xl transition duration-300 text-center"
          >
            <h3 className="text-xl font-semibold">📊 Progress Report</h3>
            <p className="text-gray-500 mt-2">Track calories & improvements</p>
          </div>

        </div>
      </div>
    </>
  );
}

export default Dashboard;