const Nav = ({ handleClick }) => {
  return (
    <>
       <div className="navBar">
        <button onClick={() => handleClick("AddFood")} type="button">
          Add Food
        </button>
        <button onClick={() => handleClick("Home")} type="button">
          Home
        </button>
        <button onClick={() => handleClick("Macro")} type="button">
          Macros
        </button>
        
      </div>
      
    </>
  );
};

export default Nav;
