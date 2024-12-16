import { useState } from 'react'
import Macro from "./components/macro.jsx"
import GoalsComponent from "./components/GoalBuilder.jsx"
import './App.css'



const App = () => {

  return (
    <>
    <h1>Welcome to the Macro App!</h1>
    <Macro />
    <GoalsComponent />
    </>
  );
}

export default App
