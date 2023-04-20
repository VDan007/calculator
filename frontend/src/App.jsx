import { useState, useEffect} from 'react';
import { keyPress } from './keypress__function';

function App() {
 
  const [currentOperand,setCurrentOperand] = useState('');
  const [previousOperand,setPreviousOperand] = useState('');
  const [operation,setOperation] = useState('');
  const [saveNumberToMemory,setSaveNumberToMemory] = useState(true);
  const [getNumberFromMemory,setGetNumberFromMemory] = useState(true);
  const [override,setOverride] = useState(false);

  useEffect(
    ()=>{
      document.addEventListener('keydown',keyPress);
     return ()=>{  document.removeEventListener('keydown',keyPress) }
    },[]
  );

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
        setOverride(false);
        setCurrentOperand(newNum);

      }
    } else if (e.target.innerText === '.' && !currentOperand.includes('.')){
      const newNum =  override? e.target.innerText :currentOperand + e.target.innerText;
      setOverride(false);
      setCurrentOperand(newNum);
    }
  }

  function addNumberToPreviousOperand(){
    setPreviousOperand(currentOperand);
    setCurrentOperand('');
  }

  function handleClickOperation(e){
    if(operation === '' && currentOperand){
      setOperation(e.target.innerText);
      addNumberToPreviousOperand();
    } else if (currentOperand){
      const subResult = operations(currentOperand,previousOperand,operation);
      setPreviousOperand (subResult);
      setOperation(e.target.innerText);
      setCurrentOperand('');
    }
  }

  function handleClickEqual(){
    if(currentOperand && previousOperand){
     
      setOverride(true);
      switch(operation){
        case '+':
          setCurrentOperand(operations(currentOperand,previousOperand,'+'));
          setPreviousOperand('');
          setOperation('');
          break;
        case '-':
          setCurrentOperand(operations(currentOperand,previousOperand,'-'));
          setPreviousOperand('');
          setOperation('');
          break;
        case 'x':
          setCurrentOperand(operations(currentOperand,previousOperand,'x'));
          setPreviousOperand('');
          setOperation('');
          break;
        case '÷':
          setCurrentOperand(operations(currentOperand,previousOperand,'÷'));
          setPreviousOperand('');
          setOperation('');
          break;
  
      }

    }
  }

  function operations(currentValue,previousValue,operationType){
    switch(operationType){
      case '+':
        return String( (parseFloat(currentValue) + parseFloat(previousValue)).toFixed(5).replace(/\.?0+$/, '') );
      case '-':
        return String( (parseFloat(previousValue) - parseFloat(currentValue)).toFixed(5).replace(/\.?0+$/, '') );
      case 'x':
        return String( (parseFloat(previousValue) * parseFloat(currentValue)).toFixed(5).replace(/\.?0+$/, '') );
      case '÷':
        return String( (parseFloat(previousValue) / parseFloat(currentValue)).toFixed(5).replace(/\.?0+$/, '') );

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
        <p>{previousOperand} {operation}</p>
      </div>
      <div className='current'>
        <p>{currentOperand}</p>
      </div>
    </div>

    <button id="clear" className='normal pinkLetter' onClick={handleClickClear}>C</button>
    <button id="saveToMemory" className='normal pinkLetter' onClick={saveToMemory}>M+</button>
    <button id="getFromMemory" className='normal pinkLetter' onClick={readFromMemory}>Mrcl</button>
    <button id="devide" className='pinkBg' onClick={handleClickOperation}>÷</button>
    <button id="7" className='normal' onClick={addNumberToCurrentOperand}>7</button>
    <button id="8" className='normal' onClick={addNumberToCurrentOperand}>8</button>
    <button id="9" className='normal' onClick={addNumberToCurrentOperand}>9</button>
    <button id="multiply"className='pinkBg' onClick={handleClickOperation}>x</button>
    <button id="4" className='normal' onClick={addNumberToCurrentOperand}>4</button>
    <button id="5" className='normal' onClick={addNumberToCurrentOperand}>5</button>
    <button id="6" className='normal' onClick={addNumberToCurrentOperand}>6</button>
    <button id="subtract" className='pinkBg' onClick={handleClickOperation}>-</button>
    <button id="1" className='normal' onClick={addNumberToCurrentOperand}>1</button>
    <button id="2" className='normal' onClick={addNumberToCurrentOperand}>2</button>
    <button id="3" className='normal' onClick={addNumberToCurrentOperand}>3</button>
    <button id="add" className='pinkBg' onClick={handleClickOperation}>+</button>
    <button id="0" className='normal two__span' onClick={addNumberToCurrentOperand}>0</button>
    <button id="." className='normal' onClick={addNumberToCurrentOperand}>.</button>
    <button id="equal" className='pinkBg' onClick={handleClickEqual}>=</button>
    
   </div>
  )
}

export default App;
