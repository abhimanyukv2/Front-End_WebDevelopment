// import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useReducer } from 'react';

const [firstCity, second] = ["Tokyo", "Tahoe City", "Bend"];
console.log(firstCity)
console.log(second)

function App({ library }) {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired")

  useEffect(() =>{
    console.log(`It's ${emotion} right now`);
  }, [emotion, secondary]);

  useEffect(() => {
    console.log(`'It's ${secondary} around here!`);
  })

  const [checked, setChecked] = useReducer((checked) => !checked, false);
  
  return (
    <><div className="App">
      <h1>Hello from {library}</h1>
      <h1>Current emotion is {emotion}</h1>
      <button onClick={(() => setEmotion("sad"))}>Sad</button>
      <button onClick={(() => setEmotion("excited"))}>Excited</button>
      <h2>Current Secondary emotattion is {secondary}.</h2>
      <button onClick={(() => setSecondary("greatful"))}>Greatful</button>
    </div>
    <div className='App'>
      <input type="checkbox" value={checked} onChange={setChecked} />
      <label>{checked ? "Checked" : "not checked"}</label>
    </div></>
  );
}

export default App;
