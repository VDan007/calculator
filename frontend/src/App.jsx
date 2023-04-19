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
    <button>C</button>
    <button>M+</button>
    <button>Ma</button>
    <button>÷</button>
    <button>7</button>
    <button>8</button>
    <button>9</button>
    <button>x</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>-</button>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>+</button>
    <button className='two__span'>0</button>
    <button>.</button>
    <button>=</button>
    
   </div>
  )
}

export default App;
