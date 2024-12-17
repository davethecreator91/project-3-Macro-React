import { useState } from 'react'
import Macro from "./components/macro.jsx"
import GoalsComponent from "./components/GoalBuilder.jsx"
import './App.css'
import FetchApi from './components/FetchAPI.jsx'



const App = () => {

  return (
    <>
    <h1>Welcome to the Macro App!</h1>
    <Macro />
    <GoalsComponent />
    <FetchApi />
    </>
  );
}

export default App
