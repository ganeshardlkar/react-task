import React, { useState } from "react";
import './Calculator.css';

const Calculator = () => {

    let [num1, setNum1] = useState('');
    let [num2, setNum2] = useState('');
    let [result, setResult] = useState('');
    let [message, setMessage] = useState(false);
    let [error, setError] = useState('');

    const handleChangeNum1 = (e) => {
        setNum1 = setNum1(e.target.value);
    }
    const handleChangeNum2 = (e) => {
        setNum2 = setNum2(e.target.value)
    }
    const checkIfEmpty = (x, y) => {
        if(num1 === '') {
            setError('Error: Num1 cannot be empty');
            return [];
        }else if(num2 === '') {
            setError('Error: Num2 cannot be empty');
            return [];
        }
        return [Number(x), Number(y)];
    }
    const handleExecAdd = (e) => {
        const ans = checkIfEmpty(num1, num2);
        if(ans.length === 0) {
            setNum1('');
            setNum2('');
            return;
        }
        setResult(ans[0]+ans[1]);
        setMessage('Success: Your result is shown above');
        setNum1('');
        setNum2('');
    }
    const handleExecSub = (e) => {
        const ans = checkIfEmpty(num1, num2);
        if(ans.length === 0) {
            setNum1('');
            setNum2('');
            return;
        }
        setResult(ans[0]-ans[1]);
        setMessage('Success: Your result is shown above');
        setNum1('');
        setNum2('');
    }
    const handleExecMul = (e) => {
        const ans = checkIfEmpty(num1, num2);
        if(ans.length === 0) {
            setNum1('');
            setNum2('');
            return;
        }
        setResult(ans[0]*ans[1]);
        setMessage('Success: Your result is shown above');
        setNum1('');
        setNum2('');
    }
    const handleExecDiv = (e) => {
        const ans = checkIfEmpty(num1, num2);
        if(ans.length === 0) {
            setNum1('');
            setNum2('');
            return;
        }
        setResult(ans[0]/ans[1]);
        setMessage('Success: Your result is shown above');
        setNum1('');
        setNum2('');
    }

    return (
        <div className="div">
            <div className="calc">
                <h1>React Calculator</h1>       
                <div className="input-tags">
                    <input type="text" placeholder="Num 1" value={num1} onChange={handleChangeNum1}/>
                    <br />
                    <input type="text" placeholder="Num 2" value={num2} onChange={handleChangeNum2}/>
                </div>
                <div className="operators">
                    <button type="submit" className="operator" onClick={handleExecAdd}>+</button>
                    <button type="submit" className="operator" onClick={handleExecSub}>-</button>
                    <button type="submit" className="operator" onClick={handleExecMul}>*</button>
                    <button type="submit" className="operator" onClick={handleExecDiv}>/</button>
                </div>
                <div>
                    {
                        error !== '' ? <p style={{color: "red"}}>{error}</p> : 
                        <div>
                            <p>Result: {result}</p>
                            <p style={{color: "green"}}>{message}</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Calculator;