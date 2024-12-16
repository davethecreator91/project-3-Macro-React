import { useState } from "react";
import Macro from "./components/macro.jsx";
import "./App.css";
import AddFood from "./components/addFood.jsx";
import Nav from "./components/Nav.jsx";
import Home from "./components/Home.jsx";

const App = () => {
  const [navItem, setNavItem] = useState("");
  const handleClick = (navItem) => {
    setNavItem(navItem);
    console.log(navItem);
  };

  const renderComponent = () => {
    if (navItem === "AddFood") {
      return <AddFood />;
    }
    if (navItem === "Macro") {
      return <Macro />;
    }
    if (navItem === "Home") {
      return <Home />;
    }
  };
  return (
    <>
      {/* <h1>Welcome to the Macro Tracker!</h1> */}
      
        <img
          src="https://www.motionfitnessbali.com/wp-content/uploads/2019/03/Pie_chart_of_food_products.jpg"
          alt="Know your Macros: Carbs, protein and fats shown"
        />
      
      <div>
        <Nav handleClick={handleClick} />
      </div>
      <div className="renderComponent">{renderComponent()}</div>
    </>
  );
};

export default App;
