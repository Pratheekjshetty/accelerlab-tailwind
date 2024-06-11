import React, { useState } from 'react';
import './App.css';

function App() {
  const [count,setCount]=useState(0);
  return (
    <>
    {/* <div className="bg-orange-400 w-full h-8">
    <h1 className='text-white'>
      Accelerlab Solutions
    </h1>
    </div>
    <div className='flex flex-col md:flex-row bg-yellow-300 md:bg-green-400 justify-center '>
    <div className='flex w-full text-center justify-end'>Moodabidire</div>
    <div className='flex w-full text-center justify-start'>Manglore</div>
  </div>
  <div className='flex flex-col md:flex-row bg-red-300 md:bg-violet-400 justify-center '>
    <div className='flex w-full justify-center '>Moodabidire</div>
    <div className='flex w-full justify-center '>Manglore</div>
  </div>
  <div className='flex flex-col md:flex-row bg-pink-300 md:bg-blue-400 justify-center '>
    <div className='flex w-full text-center justify-start'>Moodabidire</div>
    <div className='flex w-full text-center justify-end'>Manglore</div>
  </div> */}
  <div className='m-4' >
    <p>{count}</p>
    <button className='bg-green-400 text-white p-1 border border-fuchsia-600 ' onClick={()=>setCount(count+1)}> Increment</button> &nbsp;
    <button className='bg-blue-400 text-white p-1 border border-fuchsia-600 'onClick={()=>setCount(count-1)}> Decrement</button>
  </div>
  </>
  );
}

export default App;
