// import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useReducer, useRef } from 'react';

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

  const txtTitle = useRef();
  const hexColor = useRef();
  const submit = (e) => {
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    alert(`${title}, ${color}`);
    txtTitle.current.value = "";
    hexColor.current.value = "";
  }

  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");
  const eSubmit = (e) => {
    e.preventDefault();
    alert(`${title}, ${color}`);
    setTitle("");
    setColor("#000000")
  }
  
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
    </div>
    <div>
      <form onSubmit={submit}>
        <input ref={txtTitle} type="text" placeholder='color title ...' />
        <input ref={hexColor} type='color' />
        <button>Add</button>
      </form>
    </div>
    <div>
      <form onSubmit={eSubmit}>
        <input value={title} onChange={(event) => setTitle(event.target.value) } type="text" placeholder='color title...' />
        <input value={color} type="color" onChange={(event) => setColor(event.target.value)} />
        <button>ADD</button>
      </form>
    </div>
    </>
  );
}

export default App;
