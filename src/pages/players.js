import React,{useEffect} from "react";
import { useState } from "react";
 
const Players = () => {
    useEffect(() => {
        document.getElementById("title").innerHTML = "Players"
    },[]);

    const [playerDetails, setPlayerDetails] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:3001/player/data")
          .then((res) => res.json())
          .then((data) => setPlayerDetails(JSON.stringify(data,null,2)))
      }, []);
    return (
        <div>
            <h1>{playerDetails}</h1>
        </div>
    );
};
 
export default Players;