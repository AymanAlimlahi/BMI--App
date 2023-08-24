import React, { useState } from 'react';
import"./Bmi.css"

export default function Bmi ()  {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
    }
  };
  function Reload(){
    window.location.reload();
  }

  return (
    <div className='container' id='d'>
 <div className="bmi-calculator">
      <h2>BMI Calculator</h2>
      <div className="input-group">
        <label htmlFor="weight">Weight:</label>
        <input
          type="number"
          value={weight}
          placeholder="Weight (kg)"
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="height">Height:</label>
        <input
          type="number"
          value={height}
          placeholder="Height (cm)"
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          value={age}
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <button className="calculate-btn" onClick={calculateBMI}>
        Calculate BMI
      </button>
      <button className="reload-btn" onClick={Reload}>
        Reload
      </button>
      {bmi && <p className="bmi-result">Your BMI: {bmi}</p>}
    </div>
    </div>
  );
};

