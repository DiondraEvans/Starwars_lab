import axios from 'axios';

export const GetAllStarships = async () =>{
   
        return await axios.get("https://swapi.dev/api/starships/").then(response => response.data)
        
}

export default GetAllStarships;





    // let response =  await axios.get('https://swapi.dev/api/starships/')
    // console.log('response  ', response)
    // return response.data;

    // console.log(Response.data.results[0].name);
    // console.log(response.data.results)
    // setData(response.data.results)
                    
    // let ships = data.map((ship, index) =>{
    //     console.log(ship.name)
    //     return <div key={index}>{ship.name}</div>
    //     })    
// const ship = ["ship1", "ship2","ship3", "ship4"]