import React, { useEffect } from "react";
import { useState } from "react";

const Players = () => {
    useEffect(() => {
        document.getElementById("title").innerHTML = "Players"
    }, []);

    const [playerDetails, setPlayerDetails] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/player/data")
            .then((res) => res.json())
            .then((data) => setPlayerDetails(data))
    }, []);
    return (
        <>
            <center>
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

                <div id="player-table-choice">
                    <div className="radio">
                        <input type="radio" id="html" name="user-input" value="create" />
                        <label for="create">Add new player</label>
                    </div>
                    <div className="radio">

                        <input type="radio" id="css" name="user-input" value="update" />
                        <label for="update">Update existing player</label>
                    </div>
                    <div className="radio">

                        <input type="radio" id="javascript" name="user-input" value="delete" />
                        <label for="javascript">Delete player</label>
                    </div>
                </div>
                <div id="search_bar">
                    <input type="search"></input>
                    <button>Press</button>
                </div>
            </center>
        </>
    );
};

export default Players;