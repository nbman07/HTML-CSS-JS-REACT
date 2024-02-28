import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';


const CreateActor = () => {

    const navigate = useNavigate();

    useEffect(() => {
        document.getElementById("title").innerHTML = "Create Actor"
    }, []);

    const [actorFirstName, setActorFirstName] = useState(null);
    const [actorLastName, setActorLastName] = useState(null);

    const CreateNewActor = () => {

        if (actorFirstName === null || actorLastName === null) {
            console.log("Empty value");
            document.getElementById("create-actor-error-warning").innerText = "Please enter values in all fields.";
        } else {
            const data = {
                "firstName": actorFirstName, "lastName": actorLastName
            };
            console.log(data);
            postJSON(data);

        }
        async function postJSON(data) {
            try {
                const response = await fetch("http://13.51.175.213:8080/home/add/actor", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                });
                navigate("/actors");
            } catch (error) {
                console.error("Error is:", error);
            }
        }
    }

    return (
        <center>
            <div id="create-actor-page">
                <div className="create-actor-inputs">
                    <div className="create-actor-input-labels">
                        <label>First Name</label>
                    </div>
                    <div>
                        <input type="text" id="create-actor-first-name" placeholder="First Name" onChange={(evt) => setActorFirstName(evt.target.value)} />
                    </div>
                </div>
                <div class="create-actor-inputs">
                    <div className="create-actor-input-labels">
                        <label>Last Name</label>
                    </div>
                    <div>
                        <input type="text" id="create-actor-last-name" placeholder="Last Name" onChange={(evt) => setActorLastName(evt.target.value)} />
                    </div>
                </div>
            </div>
            <div>
                <button onClick={() => CreateNewActor()}>Create</button>
                <button><Link to="/actors">Cancel</Link></button>
            </div>
            <div id="create-actor-error-warning">

            </div>
        </center>

    );
};

export default CreateActor;