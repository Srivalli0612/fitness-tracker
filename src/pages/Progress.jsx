import Navbar from "../components/Navbar";
import { useState } from "react";

function Progress() {
  const [caloriesBurnt] = useState(1200);
  const [caloriesIntake] = useState(1500);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 pt-24 px-6">
        <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-xl text-center">
          <h2 className="text-2xl font-bold mb-6">📊 Progress Report</h2>

          <div className="space-y-4 text-lg">
            <p>🔥 Calories Burnt: {caloriesBurnt}</p>
            <p>🍽 Calories Intake: {caloriesIntake}</p>
            <p className="font-bold">
              Net: {caloriesIntake - caloriesBurnt}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Progress;