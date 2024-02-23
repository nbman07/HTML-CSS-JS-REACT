import React, { useEffect } from "react";
import { useState } from "react";
import RadioInput from "../components/radio-input";
import ProcessRadioInput from "../process-radio-input";

const Players = () => {
    useEffect(() => {
        document.getElementById("title").innerHTML = "Players"
    }, []);

    const [playerDetails, setPlayerDetails] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/player/data")
            .then((res) => res.json())
            .then((data) => setPlayerDetails(data))
    }, []);
    return (
        <>
            <center>
                <div id="players-players">
                    <div id="search_bar">
                        <input type="search" placeholder="Search by name or ID..."></input>
                        <button>Search</button>
                    </div>
                    <div id="player-details">
                        <table>
                            <thead>

                                <tr>
                                    <th>ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Country ID</th>
                                    <th>Club ID</th>
                                </tr>
                            </thead>
                            <tbody>

                                {playerDetails.map((item) => (
                                    <tr key={item.player_id}>
                                        <td>{item.player_id}</td>
                                        <td>{item.first_name}</td>
                                        <td>{item.last_name}</td>
                                        <td>{item.country_id}</td>
                                        <td>{item.club_id}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <RadioInput />
                <br />
                <ProcessRadioInput />
                <div id="local-db-interaction">
                </div>
                <div id="error-warning">
                    <p id="error-warning-text"></p>
                </div>
            </center>
        </>
    );
};

export default Players;