import { render } from "@testing-library/react";
import React, { useEffect } from "react";
import DisplayTeams from "../footballAPI";

function ClearClubs(league,season) {
    try {
        document.getElementById("teams").innerHTML = "";
    }catch{
    } 
    DisplayTeams(league,season);
}

const Clubs = () => {
    useEffect(() => {
        document.getElementById("title").innerHTML = "Clubs"
    }, []);

    return (
        <>
        <div>
            <center>
                <form id="league-season-selector">
                    {/* <label >League</label> */}
                    <p>League</p>
                    <select name="league" id="league_options">
                        <option value="39">Premier League</option>
                        <option value="61">Ligue 1</option>
                        <option value="135">Serie A</option>
                        <option value="78">Bundesliga</option>
                        <option value="140">La Liga</option>
                    </select>
                    {/* <label>Season</label> */}
                    <p>Season</p>
                    <select name="season" id="season_options">
                        <option value="2023">2023-24</option>
                        <option value="2022">2022-23</option>
                        <option value="2021">2021-22</option>
                    </select>
                </form>
                <button id="submit-button" onClick={(e) => {ClearClubs(document.getElementById("league_options").value, document.getElementById("season_options").value)}}>Display teams</button>
                {/* <button onClick={DisplayTeams(document.getElementById("league_options").value, document.getElementById("season_options").value)}>Click here</button> */}
                {/* <button onClick={DisplayTeams}>Click here</button> */}
                <div id="team">
                </div>
            </center>
        </div>
        </>
    );
};

export default Clubs;