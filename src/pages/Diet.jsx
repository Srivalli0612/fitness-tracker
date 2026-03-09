import Navbar from "../components/Navbar";
import { useState } from "react";

function Diet() {
  const [protein, setProtein] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fiber, setFiber] = useState("");

  const generateDiet = () => {
    setProtein("60g");
    setCarbs("250g");
    setFiber("30g");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 pt-24 px-6">
        <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-xl text-center">
          <h2 className="text-2xl font-bold mb-6">🥗 Diet Plan</h2>

          <button
            onClick={generateDiet}
            className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition"
          >
            Generate Diet Plan
          </button>

          {protein && (
            <div className="mt-6 text-left">
              <p><strong>Protein:</strong> {protein}</p>
              <p><strong>Carbs:</strong> {carbs}</p>
              <p><strong>Fiber:</strong> {fiber}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Diet;