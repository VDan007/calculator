import { useState } from 'react';



function App() {

  const [currentOperand,setCurrentOperand] = useState('');
  const [previousOperand,setPreviousOperand] = useState('');
  const [operation,setOperation] = useState('');

  
  function addNumberToCurrentOperand(e){
    if(e.target.innerText !== '.'){
      const newNum = String(currentOperand) + e.target.innerText;
      setCurrentOperand(newNum);
    } else if (e.target.innerText === '.' && !currentOperand.includes('.')){
      const newNum = String(currentOperand) + e.target.innerText;
      setCurrentOperand(newNum);
    }
  }

  function addNumberToPreviousOperand(){
    setPreviousOperand(currentOperand);
    setCurrentOperand('');
  }

  function handleClickOperation(e){
    setOperation(e.target.innerText);
    addNumberToPreviousOperand();
  }

  return (
   <div className='calculator__container'>

    <div className='output'>
      <div className='prev'>
        <p>{previousOperand}{operation}</p>
      </div>
      <div className='current'>
        <p>{currentOperand}</p>
      </div>
    </div>

    <button className='normal pinkLetter'>C</button>
    <button className='normal pinkLetter'>M+</button>
    <button className='normal pinkLetter'>Ma</button>
    <button className='pinkBg' onClick={handleClickOperation}>÷</button>
    <button className='normal' onClick={addNumberToCurrentOperand}>7</button>
    <button className='normal' onClick={addNumberToCurrentOperand}>8</button>
    <button className='normal' onClick={addNumberToCurrentOperand}>9</button>
    <button className='pinkBg' onClick={handleClickOperation}>x</button>
    <button className='normal' onClick={addNumberToCurrentOperand}>4</button>
    <button className='normal' onClick={addNumberToCurrentOperand}>5</button>
    <button className='normal' onClick={addNumberToCurrentOperand}>6</button>
    <button className='pinkBg' onClick={handleClickOperation}>-</button>
    <button className='normal' onClick={addNumberToCurrentOperand}>1</button>
    <button className='normal' onClick={addNumberToCurrentOperand}>2</button>
    <button className='normal' onClick={addNumberToCurrentOperand}>3</button>
    <button className='pinkBg' onClick={handleClickOperation}>+</button>
    <button className='normal two__span' onClick={addNumberToCurrentOperand}>0</button>
    <button className='normal' onClick={addNumberToCurrentOperand}>.</button>
    <button className='pinkBg'>=</button>
    
   </div>
  )
}

export default App;
