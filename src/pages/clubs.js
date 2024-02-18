import { render } from "@testing-library/react";
import React, { useEffect } from "react";
import DisplayTeams from "../footballAPI";

const Clubs = () => {
    useEffect(() => {
        document.getElementById("title").innerHTML = "Clubs"
    }, []);

    return (
        <>
        <div>
            <center>
                <form id="league-season-selector">
                    <label for="league">League</label>
                    <select name="league" id="league_options">
                        <option value="39">Premier League</option>
                        <option value="61">Ligue 1</option>
                        <option value="135">Serie A</option>
                        <option value="78">Bundesliga</option>
                        <option value="140">La Liga</option>
                    </select>

                    <label for="season">Season</label>
                    <select name="season" id="season_options">
                        <option value="2023">2023-24</option>
                        <option value="2022">2022-23</option>
                        <option value="2021">2021-22</option>
                    </select>
                </form>
                <button onClick={(e) => {DisplayTeams(document.getElementById("league_options").value, document.getElementById("season_options").value)}}>Click here</button>
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