import React, {useEffect, useState} from "react";
import axios from 'axios';
import './App.css';

const App = () => {
  const [char, setChar ] = useState({});
  
  useEffect(()=>{
    const fetchChar = () => {
    axios.get(`https://swapi.dev/api/people/5/`)
      .then(res => {
        setChar(res.data)
    //     <ol>
    //   {setChar.map(name => (
    //     <li key={name}>{name}</li>
    //   ))}
    // </ol>

      })
      .catch(err => {
        
      })
    }
    fetchChar()
},[])
  
{/* <ol>
      {reptiles.map(reptile => (
        <li key={reptile}>{reptile}</li>
      ))}
    </ol> */}


  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <h1>All the best characters!</h1>
      <h1>{char.name}</h1> 
     
    </div>
  );
}

export default App;

