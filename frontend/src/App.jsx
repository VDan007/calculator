import { useState } from 'react';


function App() {


  return (
   <div className='calculator__container'>

    <div className='output'>
      <div className='prev'>
        <p>456</p>
      </div>
      <div className='current'>
        <p>878677677</p>
      </div>
    </div>
    <button className='normal pinkLetter'>C</button>
    <button className='normal pinkLetter'>M+</button>
    <button className='normal pinkLetter'>Ma</button>
    <button className='pinkBg'>÷</button>
    <button className='normal'>7</button>
    <button className='normal'>8</button>
    <button className='normal'>9</button>
    <button className='pinkBg'>x</button>
    <button className='normal'>4</button>
    <button className='normal'>5</button>
    <button className='normal'>6</button>
    <button className='pinkBg'>-</button>
    <button className='normal'>1</button>
    <button className='normal'>2</button>
    <button className='normal'>3</button>
    <button className='pinkBg'>+</button>
    <button className='normal two__span'>0</button>
    <button className='normal'>.</button>
    <button className='pinkBg'>=</button>
    
   </div>
  )
}

export default App;
