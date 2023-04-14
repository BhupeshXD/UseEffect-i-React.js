import {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const[text, setText] = useState('');        
  const[name, setName] = useState('love');   // dependency is in bracket which is love


  // variation 1 => On every render or changes useEffect hook will bw used
  // useEffect(()=>{
  //   console.log("Ui Rendering done");
  // });

  //varaition -2 ->  first render
  useEffect(()=>{                      //callback function
    console.log("Ui Rendering done");
  },[]);
  

  //variation 3 => first render + whenever dependeny changes
  useEffect(()=>{
    console.log("Change Observed");
  },[name]);




  const changeHandler =(event)=>{
    console.log(text);
    setText(event.target.value);
  }

  return (
    <div className="App">
      <input type = "text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
