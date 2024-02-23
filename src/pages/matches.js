import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { displayFixtures } from "../footballAPI";

const Matches = () => {
    useEffect(() => {
        document.getElementById("title").innerHTML = "Matches"
    }, []);
    useEffect(() => {
        displayFixtures();
    }, [])
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