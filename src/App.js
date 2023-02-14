// import React, { useState, useEffect } from "react";
import './App.css';
// import { GetAllStarships } from './utilities/sw-api';
import StarshipCard from "./components/starshipcard";


const App = () => {

// const [data, setData] = useState(null);


  // .then(response => setData(response))

   

return (
  <div className="App">
  <div className="banner"><h1>Star Wars starships</h1></div>
    <StarshipCard />
  </div>
);

}

export default App;