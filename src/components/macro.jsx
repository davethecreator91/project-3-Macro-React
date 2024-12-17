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

const handleRemoveFood = (index) => {
    const removeFood = foods[index];
    const updatedFood = foods.filter((_, idx) => idx !==index)
    setFoods(updatedFood)
}

  return (
    <>
      <h1>Today's Meals</h1>

      {foods.map((food, index) => (
        //   <div className="foodsCard" key={index}>
        <ul key={index}>
          <li>
            <p>Name: {food.food} </p>
            <p>Calories: {food.calories}</p>
            <p>Protein: {food.protein}</p>
            <p>Carbs: {food.carbs}</p>
            <button onClick={() => handleRemoveFood(index)}>
              Remove Food
            </button>
          </li>
        </ul>
        //   </div>
      ))}
    </>
  );
};

export default Macro;
