import { useState } from 'react';

const FetchApi = () => {

const [food, setFood] = useState('');
const [nutrition, setNutrition] = useState([]);

  const API_KEY = 'cNb9pzrOR67/og3H07zGeg==zISrajMhjkZmlz0H';
  const API_URL = 'https://api.calorieninjas.com/v1/nutrition?query=';

  const handleChange = (event) => {
    setFood(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`${API_URL}${food}`, {
      headers: { 'X-Api-Key': API_KEY },
    });
    const data = await response.json();
    console.log(data.items); 
    setNutrition(data.items || []);
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
            {nutrition.map((item, index) => (
              <li key={index}>
                <p><strong>Food:</strong> {item.name}</p>
                <p><strong>Calories:</strong> {item.calories}</p>
                <p><strong>Protein:</strong> {item.protein_g} g</p>
                <p><strong>Carbs:</strong> {item.carbohydrates_total_g} g</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {nutrition.length === 0 && food && (
        <p>No nutritional information available for "{food}".</p>
      )}
    </div>
  );
};

export default FetchApi