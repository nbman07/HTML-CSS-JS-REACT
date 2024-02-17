import { render } from "@testing-library/react";
import React from "react";

const Clubs = () => {
    return (
        <div>
            <h1>Clubs Successful</h1>
            <button>Hello</button>
            <center>
                <form>
                    <label for="league">League</label>
                    <select name="league" id="league_options">
                        <option value="39">Premier League</option>
                    </select>

                    <label for="season">Season</label>
                    <select name="season" id="season_options">
                        <option value="2023-24">2023-24</option>
                    </select>
                </form>
                <button onclick="displayTeams()">Click here</button>

                <div id="team">
                </div>
            </center>
        </div>
    );
};

export default Clubs;