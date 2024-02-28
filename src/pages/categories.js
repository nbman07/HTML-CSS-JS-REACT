import React, { useEffect, useState } from "react";
import RadioInput from "../components/radioInput";
import CategoryRadioInput from "../categoryRadioInput";
import { Link } from 'react-router-dom';
import SearchBar from "../components/SearchBar";

const Categories = () => {
    useEffect(() => {
        document.getElementById("title").innerHTML = "Categories"
        readAllCategories();
    }, []);

    const [categoryDetails, setCategoryDetails] = useState([]);


    async function readAllCategories() {
        const apiURL = "http://13.51.175.213:8080/home/allCategories";

        fetch(apiURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
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

    async function searchCategories(search) {
        const baseURL = `http://13.51.175.213:8080/home/`

        let apiURL;

        if (search === "") {
            apiURL = `allCategories`;
        } else {
            apiURL = `category/search/containing/${search}`;
        }

        fetch(baseURL + apiURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Issue with Network');
                }
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

    return (
        <center>
            <div id="categories-page">
                <br />
                <div id="categories-search-bar">
                    <SearchBar onSearch={searchCategories} />
                </div>
                <div >
                    <table id="category-details-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Category Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categoryDetails.map((item) => (
                                <tr key={item.categoryID}>
                                    <td><Link to={`/category/${item.categoryID}`}>{item.categoryID}</Link></td>
                                    <td><Link to={`/category/${item.categoryID}`}>{item.categoryName}</Link></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <RadioInput />
            <br />
            <CategoryRadioInput />
            <div id="category-crud-input-fields">
            </div>
            <div id="category-error-warning">
                <p id="category-error-warning-text"></p>
            </div>
        </center>
    );
};

export default Categories;