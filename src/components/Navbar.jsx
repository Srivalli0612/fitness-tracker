import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logged out");
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-purple-600">
        🏋 Fitness Tracker
      </h1>

      <div className="space-x-6 hidden md:block">
        <Link to="/dashboard" className="text-gray-700 hover:text-purple-600">
          Dashboard
        </Link>
        <Link to="/bmi" className="text-gray-700 hover:text-purple-600">
          BMI
        </Link>
        <Link to="/workout" className="text-gray-700 hover:text-purple-600">
          Workout
        </Link>
        <Link to="/diet" className="text-gray-700 hover:text-purple-600">
          Diet
        </Link>
        <Link to="/progress" className="text-gray-700 hover:text-purple-600">
          Progress
        </Link>

        <button
          onClick={handleLogout}
          className="bg-purple-500 text-white px-4 py-1 rounded-lg hover:bg-purple-600 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;