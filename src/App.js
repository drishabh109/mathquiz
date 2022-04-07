import { useState } from 'react';
import './App.css';
import First from './First split';
import Second from './Second split';


function App() {
  const[use,set] = useState(false);
  const show=()=>{
    set(use =>!use);
  }
  const[use1,set1] = useState(false);
  const show1=()=>{
    set1(use1 =>!use1);
  }
  

  return (
    <div className="App">
      <div className="split right">
        {!use ? <button onClick={show} className= 'App-header' >Start Quiz</button> : " "}
        {use ? <  First  / > : " " }
        </div>
       <div className="split left">
        {!use1 ? <button onClick={show1} className= ' App-header1' >Start Quiz</button> : " "}
        {use1 ? <  Second  / > : " " }
        </div> 
    </div>
  );
}

export default App;
