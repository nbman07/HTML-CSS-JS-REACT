import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';


const FilmPage = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        document.getElementById("title").innerHTML = "Film Details"
        readFilm(id);
    }, []);

    const [filmDetails, setFilmDetails] = useState(null);
    const [filmID, setFilmID] = useState(null);

    function readFilm(id) {

        const apiURL = `http://13.51.175.213:8080/home/film/${id}`

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

    if (filmDetails === null) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        );
    }

    const DeleteFilm = () => {
        if (id === null) {
            console.log("Film ID is null");
        } else {
            const data = { "filmID": id };

            console.log(data);
            deleteJSON(data);

            navigate("/films");
            // window.location.reload();
        }

        async function deleteJSON(data) {
            try {
                const response = await fetch(`http://13.51.175.213:8080/home/delete/film/${id}`, {
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
        <>
            <center>
                <div id="film-crud-buttons">
                    <br />
                    <button id="back-to-films-button"><Link to={`/films`}>Back to Films</Link></button>
                    <button id="edit-film-button"><Link to={`/film/${filmDetails.filmID}/update`}>Edit Film</Link></button>
                    <button id="delete-film-button" onClick={() => DeleteFilm()}>Delete Film</button>
                </div>
                <div id="film-details">
                    <h1 id="title-of-film">{filmDetails.title}</h1>
                    <p>ID: {filmDetails.filmID}</p>
                    <p>Description: {filmDetails.description}</p>
                    <p>Language ID: {filmDetails.languageID}</p>
                    <p>Length: {filmDetails.length}</p>
                    <p>Rating: {filmDetails.rating}</p>
                    <div>{filmDetails.categoriesOfFilms.map((item) =>
                        <p key={item.categoryID}>Categories: <Link to={`/category/${item.categoryID}`}>{item.categoryName}</Link></p>)}
                        </div>

                    <p>Actors starring in this film:</p>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filmDetails.actorsStarringInFilm.map((item) => (
                                <tr key={item.actorID}>
                                    <td><Link to={`/actor/${item.actorID}`}>{item.actorID}</Link></td>
                                    <td><Link to={`/actor/${item.actorID}`}>{item.firstName} {item.lastName}</Link></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </center>
        </>
    );
};

export default FilmPage;