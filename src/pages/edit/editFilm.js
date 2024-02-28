import React, { useEffect, useState } from "react";
import { Link, useParams, redirect, useNavigate } from 'react-router-dom';



const EditFilm = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        document.getElementById("title").innerHTML = "Edit Film"
        readFilm(id);
    }, []);

    const [editFilmDetails, setEditFilmDetails] = useState(null);
    const [filmTitle, setFilmTitle] = useState(null);
    const [filmDescription, setFilmDescription] = useState(null);
    const [filmLanguageID, setFilmLanguageID] = useState(null);
    const [filmLength, setFilmLength] = useState(null);
    const [filmRating, setFilmRating] = useState(null);
    const [filmCategories, setFilmCategories] = useState(null);
    const [filmActors, setFilmActors] = useState(null);

    function readFilm(id) {

        const apiURL = `http://13.51.175.213:8080/home/film/${id}`

        fetch(apiURL)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setEditFilmDetails(data);
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
                throw error;
            });

    }

    if (editFilmDetails === null) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        );
    }

    const UpdateFilm = (id) => {
        if (filmTitle === null || filmDescription === null || filmLanguageID === null || filmLength === null || filmRating === null) {
            console.log("Empty value");
            document.getElementById("edit-film-warning-text").innerText = "Please enter values in all fields.";
        } else {
            const data = {
                "title": filmTitle, "description": filmDescription, "languageID": filmLanguageID, "length": filmLength, "rating": filmRating,
                "categoriesOfFilms": filmCategories, "actorsStarringInFilm": filmActors
            };
            console.log(data);

            postJSON(data, id);

            navigate(`/film/${id}`);
        }
    }
    async function postJSON(data, id) {
        try {
            const response = await fetch(`http://13.51.175.213:8080/home/update/film/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            // const result = await response.json();
            // console.log("Success:", result);
        } catch (error) {
            console.error("Error is:", error);
        }
    }

    const AddActor = () => { }
    const AddCategory = () => { }

    return (
        <>
            <center>
                <div id="film-details">
                    <div id="film-details">
                        <h1 id="title-of-film">{editFilmDetails.title}</h1>
                        <p>ID: {editFilmDetails.filmID}</p>
                        <p>Description: {editFilmDetails.description}</p>
                        <p>Language ID: {editFilmDetails.languageID}</p>
                        <p>Length: {editFilmDetails.length}</p>
                        <p>Rating: {editFilmDetails.rating}</p>
                        <div>{editFilmDetails.categoriesOfFilms.map((item) =>
                            <p key={item.categoryID}> Categories: {item.categoryName}</p>)}</div>

                        <p>Actors starring in this film:</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {editFilmDetails.actorsStarringInFilm.map((item) => (
                                    <tr key={item.actorID}>
                                        <td><Link to={`/actor/${item.actorID}`}>{item.actorID}</Link></td>
                                        <td><Link to={`/actor/${item.actorID}`}>{item.firstName}</Link></td>
                                        <td><Link to={`/actor/${item.actorID}`}>{item.lastName}</Link></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div id="edit-film-input-fields">
                    <label>Title</label>
                    <input type="text" id="update-film-title" placeholder="Title" onChange={(evt) => setFilmTitle(evt.target.value)} />
                    <label>Description</label>
                    <input type="text" id="update-film-description" placeholder="Description" onChange={(evt) => setFilmDescription(evt.target.value)} />
                    <label>Language ID</label>
                    <input type="text" id="update-film-language-id" placeholder="Language ID" onChange={(evt) => setFilmLanguageID(evt.target.value)} />
                    <label>Length</label>
                    <input type="text" id="update-film-length" placeholder="Length" onChange={(evt) => setFilmLength(evt.target.value)} />
                    <label>Rating</label>
                    <input type="text" id="update-film-rating" placeholder="Rating" onChange={(evt) => setFilmRating(evt.target.value)} />
                    {/* <label>Categories</label>
                    <input type="text" id="update-film-categories" placeholder="Categories" onChange={(evt) => setFilmCategories(evt.target.value)} />
                    <label>Actors</label>
                    <input type="text" id="update-film-actors" placeholder="Actors" onChange={(evt) => setFilmActors(evt.target.value)} /> */}
                </div>
                <br />
                <button onClick={() => AddActor()}>Add Actor</button>
                <button onClick={() => AddCategory()}>Add Category</button>
                <div id="edit-film-buttons">
                    <br />
                    <button onClick={() => UpdateFilm(id)}>Update</button>
                    <button><Link to={`/film/${id}`}>Cancel</Link></button>
                </div>
                <div id="edit-film-warning-text">

                </div>
            </center>
        </>
    );
}

export default EditFilm;