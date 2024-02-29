import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditActor = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        document.getElementById("title").innerHTML = "Edit Actor"
        readActor(id);
    }, []);

    const [actorDetails, setActorDetails] = useState(null);
    const [actorFirstName, setActorFirstName] = useState(null);
    const [actorLastName, setActorLastName] = useState(null);

    function readActor(id) {

        const apiURL = `http://13.51.175.213:8080/home/actor/${id}`

        fetch(apiURL)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setActorDetails(data);
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
                throw error;
            });

    }

    if (actorDetails === null) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        );
    }

    const UpdateActor = (id) => {
        if (actorFirstName === null || actorLastName === null) {
            console.log("Empty value");
            document.getElementById("edit-actor-warning-text").innerText = "Please enter values in all fields.";
        } else {
            const data = {
                "firstName": actorFirstName, "lastName": actorLastName
            };
            console.log(data);

            postJSON(data, id);

        }
    }
    async function postJSON(data, id) {
        try {
            await fetch(`http://13.51.175.213:8080/home/update/actor/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            navigate(`/actor/${id}`);
        } catch (error) {
            console.error("Error is:", error);
        }
    }

    return (
            <center>
                <div id="film-details">
                    <p>ID: {actorDetails.actorID}</p>
                    <p>First Name: {actorDetails.firstName}</p>
                    <p>Last Name: {actorDetails.lastName}</p>
                </div>
                <div id="edit-actor-input-fields">
                    <div>
                        <label>First Name
                            <input type="text" id="update-actor-first-name" placeholder="First Name" onChange={(evt) => setActorFirstName(evt.target.value)} />
                        </label>
                    </div>
                    <div>
                        <label>Last Name
                            <input type="text" id="update-actor-last-name" placeholder="Last Name" onChange={(evt) => setActorLastName(evt.target.value)} />
                        </label>
                    </div>
                </div>
                <div>
                    <br />
                    <button id="update-actor-button" onClick={() => UpdateActor(id)}>Update</button>
                    <button><Link to={`/actor/${id}`}>Cancel</Link></button>
                </div>
                <div id="edit-actor-warning-text">

                </div>
            </center>
    );
}

export default EditActor;