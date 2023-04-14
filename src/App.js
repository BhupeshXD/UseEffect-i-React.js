import {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const[text, setText] = useState('');        
  const[name, setName] = useState('love');   // dependency is in bracket which is love

  // useEffect :
// agar tum apne component ke run  or render hone ke baad koi task run karwana chahte ho toh uss task ko useEffect ke andar use karte hai

// useEffect me hum do parameter pass karte hai useEffect(callback function, array [] of dependency) 

// tumhare component ke normal flow of execution ke alawa tum koi task karna chahte ho toh wo task ko sideeffect bolsakte hai or us sideeffect ko karwane ka tareeka hai useEffect.


  // variation 1 => On every render or changes useEffect hook will bw used
  // useEffect(()=>{
  //   console.log("Ui Rendering done");
  // });

  //varaition -2 ->  first render
  // useEffect(()=>{                      //callback function
  //   console.log("Ui Rendering done");
  // },[]);
  

  //variation 3 => first render + whenever dependeny changes
  // useEffect(()=>{
  //   console.log("Change Observed");
  // },[name]);


  //variation 4 => to handle unmounting of a component

  useEffect(()=>{
    console.log("Listener added");
    return ()=>{   // return will be running first 
      console.log("Listener removed");
    }
  },[text]);
 


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
