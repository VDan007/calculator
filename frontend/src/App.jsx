import { useState, useEffect, useRef } from 'react';



function App() {
 
  const [currentOperand,setCurrentOperand] = useState('');
  const [previousOperand,setPreviousOperand] = useState('');
  const [operation,setOperation] = useState('');
  const [saveNumberToMemory,setSaveNumberToMemory] = useState(true);
  const [getNumberFromMemory,setGetNumberFromMemory] = useState(true);
  const [override,setOverride] = useState(false);


  useEffect(()=>{
      fetch('/addtomemory',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          savedNumber: currentOperand
        })
      })
  },[saveNumberToMemory]);

  useEffect(
    ()=>{
      fetch('/getfrommemory')
      .then(res=>res.json())
      .then(data=>setCurrentOperand(data))
    },[getNumberFromMemory]
  );

  function readFromMemory(){
    setGetNumberFromMemory(prev=>!prev);
  }

  function saveToMemory(){
    setSaveNumberToMemory(prev=>!prev);
  }

  
  function addNumberToCurrentOperand(e){
    if(e.target.innerText !== '.'){
      if(e.target.innerText === '0' && !currentOperand || currentOperand === '0'  && !previousOperand){
        setCurrentOperand('0');
      } else {
        const newNum =  override? e.target.innerText :currentOperand + e.target.innerText;
        setCurrentOperand(newNum);

      }
    } else if (e.target.innerText === '.' && !currentOperand.includes('.')){
      const newNum =  override? e.target.innerText :currentOperand + e.target.innerText;c
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
      setOverride(true);
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
    <button className='normal pinkLetter' onClick={saveToMemory}>M+</button>
    <button className='normal pinkLetter' onClick={readFromMemory}>Mrcl</button>
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
