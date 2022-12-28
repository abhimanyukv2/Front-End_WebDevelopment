// import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useReducer, useRef } from 'react';

const [firstCity, second] = ["Tokyo", "Tahoe City", "Bend"];
console.log(firstCity)
console.log(second)

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return [
    {value, onChange: (e) => setValue(e.target.value)},
    () => setValue(initialValue)
  ];
}

function GithubUser({name, public_repos, avatar}) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{public_repos}</p>
      <img src={avatar} height={150} alt={name} />
    </div>
  )
}

const query = `
query {
  allLifts {
    name
    elevationGain
    status
  }
}
`;

const opts = {
  method: "POST",
  headers:{"Content-Type": "application/json"},
  body: JSON.stringify({ query })
};

const tahoe_peaks = [
  {name: "Freel", elevation: 10891},
  {name: "Monument", elevation: 10067},
  {name: "Pyramid", elevation: 9987},
  {name: "Tallac", elevation: 9735},
]

function List({ data, renderItem, renderEmpty}) {
  return !data.length ? renderEmpty
  : <ul>
      {data.map((item) => (
        <li key={item.name}>{renderItem(item)}</li>
      ))}
    </ul>
}

function Lift({ name, elevationGain, status }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{elevationGain} {status}</p>
    </div>
  )
};

function Home() {
  return (
    <div>
      <h1>My Website</h1>
    </div>
  )
}

function About() {
  return (
    <div>
      <h1>About Us</h1>
    </div>
  )
}

function Contct() {
  return (
    <div>
      <h1>Contact Us</h1>
    </div>
  )
}

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

  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useState("#000000");
  const titleSubmit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value}, ${colorProps.value}`);
    resetTitle();
    resetColor();
  }
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   fetch(
  //     `https://api.github.com/users/abhimanyukv2
  //   `)
  //     .then((response) => response.json())
  //     .then(setData)
  //     .then(() => setLoading(false))
  //     .catch(setError);
  //   }, []);
  
  useEffect(() => {
    setLoading(true);
    fetch(
      `http://snowtooth.moonhighway.com/`, opts
    )
    .then((response) => response.json())
    .then(setData)
    .then(() => setLoading(false))
    .catch(setError);
  }, [])

  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error)}</pre>;
  if (!data) return null;

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
    <div>
      <form onSubmit={titleSubmit}>
        <input {...titleProps} type="text" placeholder='color title...' />
        <input {...colorProps} type="color" />
        <button>Add</button>
      </form>
    </div>
    <div className='App'>
    <GithubUser name={data.name} public_repos={data.public_repos} avatar={data.avatar_url} />
    </div>
    <div className='App'>
      {data.data.allLifts.map((lift) => (
        <Lift name={lift.name} elevationGain={lift.elevationGain} status={lift.status} />
      ))}
    </div>
    <div className='App'>
      <List data={tahoe_peaks} renderEmpty={<p>This lit is empty</p>} renderItem={(item) => (
        <>
          {item.name} - {item.elevation} ft.
        </>
      )} />
    </div>
    <div className='App'>
      <Home />
    </div>
    </>
  );
}

export default App;
