import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';


const CreateCategory = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.getElementById("title").innerHTML = "Create Category"
    }, []);

    const [categoryName, setCategoryName] = useState(null);

    const CreateNewCategory = () => {
        if (categoryName === null) {
            console.log("Empty value");
            document.getElementById("create-category-error-warning").innerText = "Please enter values in all fields.";
        } else {
            const data = {
                "categoryName": categoryName
            };
            console.log(data);
            postJSON(data);
            navigate("/categories");
        }
        async function postJSON(data) {
            try {
                await fetch("http://13.51.175.213:8080/home/add/category", {
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
                <label>Category Name
                    <input type="text" id="create-category-name" placeholder="Category Name" onChange={(evt) => setCategoryName(evt.target.value)} />
                </label>
            </div>
            <div>
                <button id="create-category-button" onClick={() => CreateNewCategory()}>Create</button>
                <button><Link to="/categories">Cancel</Link></button>
            </div>
            <div id="create-category-error-warning">

            </div>
        </center>

    );
};

export default CreateCategory;