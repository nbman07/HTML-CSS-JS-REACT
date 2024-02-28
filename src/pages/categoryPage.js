import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';


const CategoryPage = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        document.getElementById("title").innerHTML = "Category Details"
        readCategory(id);
        readCategoryFilms(id);
    }, []);

    const [categoryDetails, setCategoryDetails] = useState([]);
    const [filmDetails, setFilmDetails] = useState([]);

    function readCategory(id) {
        const apiURL = `http://13.51.175.213:8080/home/category/id=${id}`

        fetch(apiURL)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setCategoryDetails(data);
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
                throw error;
            });
    }

    if (categoryDetails === null) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        );
    }

    function readCategoryFilms(id) {
        const apiURL = `http://13.51.175.213:8080/home/category/${id}/films`

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


    const DeleteCategory = () => {
        if (id === null) {
            console.log("Category ID is null");
        } else {
            const data = { "categoryID": id };

            console.log(data);
            deleteJSON(data);

            navigate("/categories");
        }

        async function deleteJSON(data) {
            try {
                const response = await fetch(`http://13.51.175.213:8080/home/delete/category/${id}`, {
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
                <button id="back-to-films-button"><Link to={`/categories`}>Back to Categories</Link></button>
                <button id="edit-actor-button"><Link to={`/category/${categoryDetails.categoryID}/update`}>Edit Category</Link></button>
                <button id="delete-actor-button" onClick={() => DeleteCategory()}>Delete Category</button>
            </div>
            <div id="actor-name">
                <h1>{categoryDetails.categoryName}</h1>
            </div>
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
                            <td><Link to={`/film/${item.id}`}>{item.id}</Link></td>
                            <td><Link to={`/film/${item.id}`}>{item.title}</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </center>
    );
};

export default CategoryPage;