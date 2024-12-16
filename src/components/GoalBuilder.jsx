import React, { useState } from 'react';

//components
const GoalComponent = () => {
  const [goal, setGoal] = useState('');
  const [macro, setMacro] = useState('');
  const [number, setNumber] = useState('');


//functions
  const handleGoalChange = (e) => {
    const selectedGoal = e.target.value;
    setGoal(selectedGoal);
    // Set default macro based on selected goal
    if (selectedGoal === 'Build Muscle') {
      setMacro('Protein');
    } else if (selectedGoal === 'Gain Energy') {
      setMacro('Carbs');
    } else if (selectedGoal === 'Lose Weight') {
      setMacro('Calories');
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const unit = goal === 'Lose Weight' ? 'kcal' : 'g';
    alert(`Goal: ${goal}\nMacro: ${macro}\nTarget Number: ${number} ${unit}`);

//return
  };
  return (
    <div className="goal-builder">
      <h1>Goal Builder</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="goal">I want to </label>
          <select id="goal" value={goal} onChange={handleGoalChange}>
            <option value="">-- Select Your Goal --</option>
            <option value="Build Muscle">Build Muscle</option>
            <option value="Gain Energy">Gain Energy</option>
            <option value="Lose Weight">Lose Weight</option>
          </select>
        </div>
        <div>
          <label htmlFor="macro">In order to achieve that I must track </label>
          <select
            id="macro"
            value={macro}
            onChange={(e) => setMacro(e.target.value)}
            disabled={!goal}
          >
            <option value="">-- Select Macro --</option>
            {goal === 'Build Muscle' && <option value="Protein">Protein</option>}
            {goal === 'Gain Energy' && <option value="Carbs">Carbs</option>}
            {goal === 'Lose Weight' && <option value="Calories">Calories</option>}
          </select>
          <label htmlFor="">, The best indicator of health progress for that goal.</label>
        </div>
        <div>
          <label htmlFor="number">I want to maintain </label>
          <input
            type="number"
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder={goal === 'Lose Weight' ? 'e.g., 2000' : 'e.g., 50'}
          />
          {goal && (
            <span>
              {goal === 'Lose Weight' ? ' kcal' : ' g'}
            </span>
          )}
        </div>
        <label htmlFor=""> of {macro} over time to accomplish my goal to {goal}</label>
        <div>
            <button type="submit">Set Goal</button>
            </div>
      </form>
    </div>
  );
};
export default GoalComponent;

























