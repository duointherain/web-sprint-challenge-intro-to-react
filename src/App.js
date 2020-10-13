import React, {useEffect, useState} from "react";
import axios from 'axios';
import './App.css';

const App = () => {
  const [char, setChar ] = useState([]);
  
  useEffect(()=>{
    const fetchChar = () => {
    axios.get(`https://swapi.dev/api/people`)
      .then(res => {
        setChar(res.data.results)
        console.log(res.data.results);
   

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
      {char.map(item => {
        console.log(item)
        return(
          <div>
        <h1>{item.name}</h1>
        <h2>Their eyes are: {item.eye_color}</h2>
        </div>
        )

      }

      )}
      
     
    </div>
  );
}

export default App;

