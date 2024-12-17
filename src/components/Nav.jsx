import { useState } from "react";
import AddFood from "./addFood.jsx";
import Home from "./Home.jsx";
import Macro from "./macro.jsx";
import GoalComponent from "./GoalBuilder.jsx";
import FetchApi from "./FetchApi.jsx";

const Nav = () => {
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
    if (navItem === "GoalComponent") {
      return <GoalComponent />;
    }
    if (navItem === "FetchApi") {
      return <FetchApi />;
    }
    return null;
  };

  //=====boootstrap
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Macro App</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              //   style={"--bs-scroll-height: 100px;"}
            >
              <li className="nav-item">
                <button
                  className="nav-link active btn btn-link"
                  onClick={() => handleClick("Home")}
                >
                  Home
                </button>
              </li>
              
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={() => handleClick("GoalComponent")}
                >
                  Goal Builder
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={() => handleClick("Macro")}
                >
                  Your Macros
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={() => handleClick("FetchApi")}
                >
                  Find Food
                </button>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More!
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button
                      className="dropdown-item btn btn-link"
            
                    >
                      Your Profile
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item btn btn-link">
                      Just the facts
                    </button>
                  </li>
                  <li>
                    <hr className="dropdown-divider"></hr>
                  </li>
                  <li>
                    <button className="dropdown-item btn btn-link">
                      Something Else
                    </button>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Sign in
                </a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                onClick={() => handleClick("FetchApi")}
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button className="btn btn-outline-success" 
              
              type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
      <div className="renderComponent">{renderComponent()}</div>
    </>
  );
};

export default Nav;

// ==========original======
//     return (
//       <>
//         <div className="navBar">
//           <button onClick={() => handleClick("AddFood")} type="button">
//             Add Food
//           </button>
//           <button onClick={() => handleClick("Home")} type="button">
//             Home
//           </button>
//           <button onClick={() => handleClick("Macro")} type="button">
//             Macros
//           </button>
//           <button onClick={() => handleClick("Goals")} type="button">
//             Goals
//           </button>
//         </div>
//         <div className="renderComponent">{renderComponent()}</div>
//       </>
//     );
//   };
