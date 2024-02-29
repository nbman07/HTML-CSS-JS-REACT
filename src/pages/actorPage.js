import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import '../style.css'


const ActorPage = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        document.getElementById("title").innerHTML = "Actor Details"
        readActor(id);
        readActorFilms(id);
    }, []);

    const [actorDetails, setActorDetails] = useState([]);
    const [filmDetails, setFilmDetails] = useState([]);
    const [filmID, setFilmID] = useState([]);

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

    function readActorFilms(id) {
        const apiURL = `http://13.51.175.213:8080/home/actor/${id}/films`

        fetch(apiURL)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setFilmDetails(data);
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

    const DeleteActor = () => {
        if (id === null) {
            console.log("Actor ID is null");
        } else {
            const data = { "actorID": id };

            console.log(data);
            deleteJSON(data);
            navigate("/actors");
        }

        async function deleteJSON(data) {
            try {
                const response = await fetch(`http://13.51.175.213:8080/home/delete/actor/${id}`, {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                })
                    .then(response => console.log(response));
            } catch (error) {
                console.error("Error is:", error);
            }
        }
    }

    return (
        <center>
            <div id="actor-crud-buttons">
                <br />
                <button id="back-to-films-button"><Link to={`/actors`}>Back to Actors</Link></button>
                <button id="edit-actor-button"><Link to={`/actor/${actorDetails.actorID}/update`}>Edit Actor</Link></button>
                <button id="delete-actor-button" onClick={() => DeleteActor()}>Delete Actor</button>
            </div>
            <div id="actor-name">
                <h1>{actorDetails.firstName} {actorDetails.lastName}</h1>
            </div>
            <div>
                <p>Films starring this actor:</p>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filmDetails.map((item) => (
                            <tr key={item.title}>
                                <td><Link to={`/film/${item.filmID}`}>{item.filmID}</Link></td>
                                <td><Link to={`/film/${item.filmID}`}>{item.title}</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </center>
    );
};

export default ActorPage;