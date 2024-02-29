import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

const Actors = () => {
    useEffect(() => {
        document.getElementById("title").innerHTML = "Actors"
        readAllActors();
    }, []);

    const [actorDetails, setActorDetails] = useState([]);

    async function readAllActors() {
        const apiURL = "http://13.51.175.213:8080/home/allActors";

        fetch(apiURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Issue with Network');
                }
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
    async function searchActors(search) {
        const baseURL = `http://13.51.175.213:8080/home/`

        let apiURL;

        if (search === "") {
            apiURL = `allActors`;
        } else {
            apiURL = `actor/search/containing/${search}`;
        }

        fetch(baseURL + apiURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Issue with Network');
                }
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

    return (
        <>
            <center>
                <div id="actors-page">
                    <br />
                    <div id="actors-search-bar">
                        <SearchBar onSearch={searchActors} />
                    </div>
                    <br />
                    <button className="create-button"><Link to="/actor/create">Add new Actor</Link></button>
                    <div id="actor-details-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {actorDetails.map((item) => (
                                    <tr key={item.actorID}>
                                        <td><Link to={`/actor/${item.actorID}`}>{item.actorID}</Link></td>
                                        <td><Link to={`/actor/${item.actorID}`}>{item.firstName} {item.lastName}</Link></td>
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

export default Actors;