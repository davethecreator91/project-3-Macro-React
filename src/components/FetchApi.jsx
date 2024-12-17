import { useState } from "react";
import AddFood from "./addFood";

const FetchApi = () => {
  const [food, setFood] = useState("");
  const [nutrition, setNutrition] = useState([]);
  const [showAddFood, setShowAddFood] = useState(false); // State to toggle AddFood component

  const API_KEY = "cNb9pzrOR67/og3H07zGeg==zISrajMhjkZmlz0H";
  const API_URL = "https://api.calorieninjas.com/v1/nutrition?query=";
  const MACROS_API_URL = `http://localhost:3001/macros`;

  const handleChange = (event) => {
    setFood(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`${API_URL}${food}`, {
      headers: { "X-Api-Key": API_KEY },
    });
    const data = await response.json();
    console.log(data.items);
    setNutrition(data.items || []);
    //add to Macros array
    if (data.items && data.items.length > 0) {
      sendNutritionToMacrosAPI(data.items);
    }
  };
  const sendNutritionToMacrosAPI = async (nutritionData) => {
    const macrosData = nutritionData.map((item) => ({
      food: item.name,
      calories: item.calories,
      protein: item.protein_g,
      carbs: item.carbohydrates_total_g,
    }));

    const response = await fetch(MACROS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(macrosData),
    });
    if (response.ok) {
      console.log("Nutrition data sent to macros API successfully!");
    } else {
      console.log("Failed to send data to macros API.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Nutrition Info Finder</h1>
        <label>
          Enter a food name:
          <input type="text" value={food} onChange={handleChange} />
        </label>
        <button type="submit">Get Nutrition Info</button>
      </form>

      {nutrition.length > 0 && (
        <div>
          <h2>Nutrition Information:</h2>
          <ul>
            <button onClick={() => setShowAddFood(true)}>Add Food</button>
            {nutrition.map((item, index) => (
              <li key={index}>
                <p>
                  <strong>Food:</strong> {item.name}
                </p>
                <p>
                  <strong>Calories:</strong> {item.calories}
                </p>
                <p>
                  <strong>Protein:</strong> {item.protein_g} g
                </p>
                <p>
                  <strong>Carbs:</strong> {item.carbohydrates_total_g} g
                </p>
              </li>
            ))}
          </ul>
          {showAddFood && <AddFood />}
        </div>
      )}

      {nutrition.length === 0 && food && (
        <p>No nutritional information available for "{food}".</p>
      )}
    </div>
  );
};

export default FetchApi;
