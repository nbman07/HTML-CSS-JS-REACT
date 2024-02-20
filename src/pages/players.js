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

                <div id="search_bar">
                    <input type="search" placeholder="Search by name or ID..."></input>
                    <button>Search</button>
                </div>
                <div id="player-details">
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                        </tr>
                        {playerDetails.map((item) => (
                            <tr key={item.player_id}>
                                <td>{item.player_id}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                            </tr>
                        ))}
                    </table>
                </div>
                <RadioInput />
                <br/>
                <ProcessRadioInput />
                <div id="local-db-interaction">
                </div>
            </center>
        </>
    );
};

export default Players;