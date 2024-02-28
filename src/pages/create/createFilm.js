import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';


const CreateFilm = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.getElementById("title").innerHTML = "Create Film"
    }, []);

    const [filmTitle, setFilmTitle] = useState(null);
    const [filmDescription, setFilmDescription] = useState(null);
    const [filmLanguageID, setFilmLanguageID] = useState(null);
    const [filmLength, setFilmLength] = useState(null);
    const [filmRating, setFilmRating] = useState(null);

    const CreateNewFilm = () => {
        if (filmTitle === null || filmDescription === null || filmLanguageID === null || filmLength === null || filmRating === null) {
            console.log("Empty value");
            document.getElementById("create-film-error-warning").innerText = "Please enter values in all fields.";
        } else if (filmLanguageID != parseInt(filmLanguageID, 10) || filmLength != parseInt(filmLength, 10) || filmRating != parseInt(filmRating, 10)) {
            console.log("Not an integer");
            document.getElementById("create-film-error-warning").innerText = "Please ensure values in Language ID, Length, Rating fields are numbers.";
        } else if (filmLanguageID < 0 || filmLength < 0 || filmRating < 0) {
            console.log("Not positive number");
            document.getElementById("create-film-error-warning").innerText = "Please ensure values in Language ID, Length, Rating fields are positive numbers.";
        } else {
            const data = {
                "title": filmTitle, "description": filmDescription, "languageID": filmLanguageID, "length": filmLength, "rating": filmRating
            };
            console.log(data);
            postJSON(data);
            navigate("/films");

        }
        async function postJSON(data) {
            try {
                const response = await fetch("http://13.51.175.213:8080/home/add/film", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                });
            } catch (error) {
                console.error("Error is:", error);
            }
        }
    }

    return (
        <center>
            <div>
                <div>
                    <label>Title</label>
                    <input type="text" id="update-film-title" placeholder="Title" onChange={(evt) => setFilmTitle(evt.target.value)} />
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" id="update-film-description" placeholder="Description" onChange={(evt) => setFilmDescription(evt.target.value)} />
                </div>
                <div>

                    <label>Language ID</label>
                    <input type="text" id="update-film-language-id" placeholder="Language ID" onChange={(evt) => setFilmLanguageID(evt.target.value)} />
                </div>
                <div>
                    <label>Length</label>
                    <input type="text" id="update-film-length" placeholder="Length" onChange={(evt) => setFilmLength(evt.target.value)} />
                </div>
                <div>
                    <label>Rating</label>
                    <input type="text" id="update-film-rating" placeholder="Rating" onChange={(evt) => setFilmRating(evt.target.value)} />
                </div>
            </div>
            <div>
                <button onClick={() => CreateNewFilm()}>Create</button>
                <button><Link to="/films">Cancel</Link></button>
            </div>
            <div id="create-film-error-warning">
            </div>
        </center>
    );
};

export default CreateFilm;