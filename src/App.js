import logo from './logo.svg';
import './App.css';
import { client } from './Components/client';
import { useState, useEffect } from "react";

function App() {
  const [fetched, setFetched] = useState();
  
  useEffect(() => {
    fetch(`https://geo.ipify.org/api/v2/country?apiKey=${process.env.REACT_APP_ACCESS_TOKEN}`)
  .then(response => response.json())
  .then((data) => {        
        setFetched(data);
        })
        .catch((error) =>  alert(error));
  }, []);
  console.log(fetched)







  return (
    <div className="App">
      <header className="App-header">        
        <h1>Welcome to Whats My IP!</h1>        
      </header>
      <body>

      </body>
    </div>
  );
}

export default App;
