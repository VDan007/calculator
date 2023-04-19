import { useState } from 'react';



function App() {

  const [current,setCurrent] = useState('');
  const [previous,setPrevious] = useState('');
  const [operation,setOperation] = useState('');

  
  function addNumberToCurrent(e){
    const newNum = String(current) + e.target.innerText;
    setCurrent(newNum);
  }

  return (
   <div className='calculator__container'>

    <div className='output'>
      <div className='prev'>
        <p>{previous}{operation}</p>
      </div>
      <div className='current'>
        <p>{current}</p>
      </div>
    </div>

    <button className='normal pinkLetter'>C</button>
    <button className='normal pinkLetter'>M+</button>
    <button className='normal pinkLetter'>Ma</button>
    <button className='pinkBg'>÷</button>
    <button className='normal' onClick={addNumberToCurrent}>7</button>
    <button className='normal' onClick={addNumberToCurrent}>8</button>
    <button className='normal' onClick={addNumberToCurrent}>9</button>
    <button className='pinkBg'>x</button>
    <button className='normal' onClick={addNumberToCurrent}>4</button>
    <button className='normal' onClick={addNumberToCurrent}>5</button>
    <button className='normal' onClick={addNumberToCurrent}>6</button>
    <button className='pinkBg'>-</button>
    <button className='normal' onClick={addNumberToCurrent}>1</button>
    <button className='normal' onClick={addNumberToCurrent}>2</button>
    <button className='normal' onClick={addNumberToCurrent}>3</button>
    <button className='pinkBg'>+</button>
    <button className='normal two__span'>0</button>
    <button className='normal' onClick={addNumberToCurrent}>.</button>
    <button className='pinkBg'>=</button>
    
   </div>
  )
}

export default App;
