import React,{useEffect} from "react";
 
const Players = () => {
    useEffect(() => {
        document.getElementById("title").innerHTML = "Players"
    },[]);
    return (
        <div>
            <h1>Sign Up Successful</h1>
        </div>
    );
};
 
export default Players;