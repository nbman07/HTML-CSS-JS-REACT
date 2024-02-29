import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import SearchBar from "../components/SearchBar";

const Films = () => {

    const [filmDetails, setFilmDetails] = useState([]);

    async function readAllFilms() {
        const apiURL = "http://13.51.175.213:8080/home/allFilms";

        fetch(apiURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
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
    async function searchFilms(search) {
        const baseURL = `http://13.51.175.213:8080/home/`

        let apiURL;

        if (search === "") {
            apiURL = `allFilms`;
        } else {
            apiURL = `film/search/containing/${search}`;
        }

        fetch(baseURL + apiURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Issue with Network');
                }
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

    useEffect(() => {
        document.getElementById("title").innerHTML = "Films"
        readAllFilms();
    }, []);

    return (
        <>
            <center>
                <div id="films-page">
                    <br />
                    <div id="films-search-bar">
                        <SearchBar onSearch={searchFilms} />
                    </div>
                    <br />
                    <button><Link to="/film/create">Add new Film</Link></button>
                    <div id="films-details-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    {/* <th>Last Name</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {filmDetails.map((item) => (
                                    <tr key={item.filmID}>
                                        <td><Link to={`/film/${item.filmID}`}>{item.filmID}</Link></td>
                                        <td><Link to={`/film/${item.filmID}`}>{item.title}</Link></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </center>
        </>
    );
};

export default Films;