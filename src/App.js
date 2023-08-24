import React from 'react';
import './App.css';
import Bmi from './bmi/Bmi';
import TypeWriterEffect from 'react-typewriter-effect';

function App() {
  return (
    <div className="App">
      <nav>
        <p>BMI</p>
        <button id="button"><a href='https://www.linkedin.com/in/alimlahi-aymane-bb3514248/' target="_blank">Contact Me</a></button>
      </nav>
      <center>         <TypeWriterEffect id="dd"
        textStyle={{
          fontFamily: 'Red Hat Display',
          color: 'white',
          textAlign:"center",
          fontWeight: 500,
          marginTop:"2%",
          fontSize: '1.5em',
        }}
        startDelay={2000}
        cursorColor="white"
        multiText={[
          'BMI measures body fat',
          'Health risk increases with BMI.',
          'Health risk increases with BMI.',
          'Underweight, normal, overweight, obese..',
          'BMI guides health choices.',
        ]}
        multiTextDelay={1000}
        typeSpeed={30}
      /></center>
      <Bmi/>
    </div>
  );
}

export default App;
