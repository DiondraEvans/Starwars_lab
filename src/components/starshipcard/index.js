import React, { useState, useEffect } from "react";
import { GetAllStarships } from '../../utilities/sw-api'
import './index.css';

const StarshipCard = () =>{
    const [data, setData] = useState(null);
    useEffect(() => {
        async function fetchData() {
          // You can await here
          const response = await GetAllStarships();
          console.log(response.results)
          let results = response.results
          
           let ships = results.map((ship, index) =>{
              console.log(ship.name)
              return <div key={index} className="blocks">{ship.name}</div>
              })    
              setData(ships)
        }
        fetchData();
      
      }, [])
       
    return (
        <div className="grid-container">
            {data}
        </div>
        
    )
}
export default StarshipCard