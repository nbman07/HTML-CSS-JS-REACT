import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditCategory = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        document.getElementById("title").innerHTML = "Edit Category"
        readCategory(id);
    }, []);

    const [categoryDetails, setCategoryDetails] = useState(null);
    const [categoryName, setCategoryName] = useState(null);

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

    const UpdateCategory = (id) => {
        if (categoryDetails === null) {
            console.log("Empty value");
            document.getElementById("edit-category-warning-text").innerText = "Please enter values in all fields.";
        } else {
            const data = {
                "categoryName": categoryName
            };
            console.log(data);

            postJSON(data, id);

            navigate(`/category/${id}`);
        }
    }
    async function postJSON(data, id) {
        try {
            const response = await fetch(`http://13.51.175.213:8080/home/update/category/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
        } catch (error) {
            console.error("Error is:", error);
        }
    }

    return (
        <>
            <center>
                <div id="category-details">
                    <p>ID: {categoryDetails.categoryID}</p>
                    <p>Category Name: {categoryDetails.categoryName}</p>
                </div>
                <div id="edit-category-input-fields">
                    <label>Category Name</label>
                    <input type="text" id="update-category-name" placeholder="Category Name" onChange={(evt) => setCategoryName(evt.target.value)} />
                </div>
                <div id="edit-category-buttons">
                    <br />
                    <button onClick={() => UpdateCategory(id)}>Update</button>
                    <button><Link to={`/category/${id}`}>Cancel</Link></button>
                </div>
                <div id="edit-category-warning-text">

                </div>
            </center>
        </>
    );
}

export default EditCategory;