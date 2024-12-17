import { useEffect, useState } from "react";
import UpdateFood from "./UpdateFood";

const Macro = () => {
  const [foods, setFoods] = useState([]);
  const [updateFoods, setUpdateFoods] = useState(null);
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

  const handleRemoveFood = (id) => {
    setFoods((prevFoods) => prevFoods.filter((food) => food._id !== id));
  };

  //   (index) => {
  //     const removeFood = foods[index];
  //     const updatedFood = foods.filter((_, idx) => idx !== index);
  //     setFoods(updatedFood);
  //   };

  const handleUpdateRefresh = (updatedData) => {
    setFoods((prevFoods) =>
      prevFoods.map((food) =>
        food._id === updatedData._id ? updatedData : food
      )
    );
    setUpdateFoods(null);
  };

  return (
    <>
      <h1>Today's Meals</h1>

      {foods.map((food, index) => (
        <div className="foodsCard" key={index}>
          <ul>
            <li>
              <button 
                className="btn btn-outline-danger"
                onClick={() => handleRemoveFood(food._id)}
              >
                X
              </button>
              <p>Name: {food.food} </p>
              <p>Calories: {food.calories}</p>
              <p>Protein: {food.protein}</p>
              <p>Carbs: {food.carbs}</p>

              <button onClick={() => setUpdateFoods(food._id)}>
                Update {food.food}
              </button>

              {updateFoods === food._id && (
                <UpdateFood
                  onUpdateSuccess={handleUpdateRefresh}
                  key={food._id}
                  id={food._id}
                />
              )}
            </li>
          </ul>
        </div>
      ))}
    </>
  );
};

export default Macro;
