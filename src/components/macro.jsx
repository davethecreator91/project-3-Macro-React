import { useEffect, useState } from "react";

const Macro = () => {
  const [foods, setFoods] = useState([]);
  const fetchFoods = async () => {
    try {
      const response = await fetch(`http://localhost:3001/macros`);
      const foodData = await response.json();
      console.log(foodData);
      setFoods(foodData);
    } catch (error) {
      console.error("Error Fetching Food Macros:", error);
    }
  };
  useEffect(() => {
    fetchFoods();
  }, []);

  return (
    <>
      <h1>Foods</h1>
      <div className="foodsCardDiv">
        {foods.map((food, index) => (
          <div className="foodsCard" key={index}>
            <p>Name: {food.food} </p>
            <p>Calories: {food.calories}</p>
            <p>Protein: {food.protein}</p>
            <p>Carbs: {food.carbs}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Macro;
