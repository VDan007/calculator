import { useState, useEffect } from 'react';



function App() {

  const [currentOperand,setCurrentOperand] = useState('');
  const [previousOperand,setPreviousOperand] = useState('');
  const [operation,setOperation] = useState('');
  const [saveNumberToMemory,setSaveNumberToMemory] = useState(true);


  useEffect(()=>{
    fetch('/addtomemory',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: {
        savedNumber: currentOperand
      }
    })
    
  },[saveNumberToMemory]);

  
  function addNumberToCurrentOperand(e){
    if(e.target.innerText !== '.'){
      if(e.target.innerText === '0' && !currentOperand || currentOperand === '0'  && !previousOperand){
        setCurrentOperand('0');
      } else {
        const newNum = currentOperand + e.target.innerText;
        setCurrentOperand(newNum);

      }
    } else if (e.target.innerText === '.' && !currentOperand.includes('.')){
      const newNum = currentOperand + e.target.innerText;
      setCurrentOperand(newNum);
    }
  }

  function addNumberToPreviousOperand(){
    setPreviousOperand(currentOperand);
    setCurrentOperand('');
  }

  function handleClickOperation(e){
    if(operation === ''){
      setOperation(e.target.innerText);
      addNumberToPreviousOperand();
    } ////multiple operations without pressing equal is missing
  }

  function handleClickEqual(){
    if(currentOperand && previousOperand){
      let result;
      switch(operation){
        case '+':
          result = parseFloat(currentOperand) + parseFloat(previousOperand);
          setCurrentOperand(String(result));
          setPreviousOperand('');
          setOperation('');
          break;
        case '-':
          result = parseFloat(previousOperand) - parseFloat(currentOperand);  
          setCurrentOperand(String(result));
          setPreviousOperand('');
          setOperation('');
          break;
        case 'x':
          result = parseFloat(previousOperand) * parseFloat(currentOperand);  
          setCurrentOperand(String(result));
          setPreviousOperand('');
          setOperation('');
          break;
        case '÷':
          result = parseFloat(previousOperand) / parseFloat(currentOperand);  
          setCurrentOperand(String(result));
          setPreviousOperand('');
          setOperation('');
          break;
  
      }

    }
  }

  function handleClickClear(){
    setCurrentOperand('');
    setPreviousOperand('');
    setOperation('');
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

    <button className='normal pinkLetter' onClick={handleClickClear}>C</button>
    <button className='normal pinkLetter'>M+</button>
    <button className='normal pinkLetter'>Mrcl</button>
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
    <button className='pinkBg' onClick={handleClickEqual}>=</button>
    
   </div>
  )
}

export default App;
