import React, { useState } from "react";
import './App.css';

const App = () => {

  const[num1, setNum1] = useState('');
  const[num2, setNum2] = useState('');
  const[result, setResult] = useState('');
  // var result;

  // handle input
  const handleChangeNum1 = (e) => {
    setNum1(e.target.value);
  }
  const handleChangeNum2 = (e) => {
    setNum2(e.target.value);
  }

  const verifyInput = () => {
    if(num1 === '' && num2 === '') {
      document.getElementById('error').textContent = "Error: Enter a num";
      return false;
    }
    if(num1 === '' && num2 !== '') {
      document.getElementById('error').textContent = "Error: Num1 cannot be empty";
      return false;
    }
    if(num1 !== '' && num2 === '') {
      document.getElementById('error').textContent = "Error: Num2 cannot be empty";
      return false;
    }
    if(isNaN(num1) || isNaN(num2)) {
      document.getElementById('error').textContent = "Num can only contain floating point and integers"
      return false;
    }

    return true;
  }

  const calculate = (op) => {
    setResult(eval(num1 + op + num2));
    console.log(result);
    showResult();
  }

  const showResult = () => {
    document.getElementById('error').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('message').style.display = 'block';
  }

  const showError = () => {
    document.getElementById('error').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    document.getElementById('message').style.display = 'none';
  }

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input type="text" className="input" onChange={handleChangeNum1} placeholder="Num 1"/>
      <input type="text" className="input" onChange={handleChangeNum2} placeholder="Num 2"/>
      <div className="buttons">
        <button className="btn" id="+" onClick={() => {
            let flag = verifyInput(); 
            if(flag) {calculate('+')} else {showError()};
          }
        }>+</button>
        <button className="btn" id="-" onClick={() => {
            let flag = verifyInput(); 
            if(flag) {calculate('-')} else {showError()};
          }
        }>-</button>
        <button className="btn" id="*" onClick={() => {
            let flag = verifyInput(); 
            if(flag) {calculate('*')} else {showError()};
          }
        }>*</button>
        <button className="btn" id="/" onClick={() => {
            let flag = verifyInput(); 
            if(flag) {calculate('/')} else {showError()};
          }
        }>/</button>
      </div>
      <div id="error"></div>
      <div id="result">Result: {result}</div>
      <div id="message">Your result is shown above</div>
    </div>
  )
}

export default App;