import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { displayLiveMatches } from "../footballAPI";

const Matches = () => {
    useEffect(() => {
        document.getElementById("title").innerHTML = "Matches"
    }, []);
    useEffect(()=> {
        displayLiveMatches();
      },[])
    return (
        <>
            <center>

                <div id="matches-matches">
                </div>
            </center>
        </>
    );
}
export default Matches;