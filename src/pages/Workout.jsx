import Navbar from "../components/Navbar";

function Workout() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 pt-24 px-6">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-center">
            🏋 Workout Plan
          </h2>

          <p className="text-gray-600">
            Personalized workouts based on your BMI.
          </p>
        </div>
      </div>
    </>
  );
}

export default Workout;