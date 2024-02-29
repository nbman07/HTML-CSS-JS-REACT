const CategoryRadioInput = () => {
    const radioButtons = document.querySelectorAll('input[name="category-crud-options"]');
    for (const radioButton of radioButtons) {
        radioButton.addEventListener('click', DisplayRespectiveUI);
    }


    function DisplayRespectiveUI(e) {

        const display = document.getElementById("category-crud-input-fields");
        if (this.checked) {
            display.innerHTML = "";
            if (this.value == "create") {
                const createCategoryNameInput = document.createElement("input");
                createCategoryNameInput.id = "create-category-name";
                createCategoryNameInput.setAttribute("placeholder", "Category name");
                display.appendChild(createCategoryNameInput);

                const createSubmitButton = document.createElement("button");
                createSubmitButton.id = "create-submit-button";
                createSubmitButton.innerText = "Create";
                display.appendChild(createSubmitButton);
                createSubmitButton.addEventListener("click", () => CreateCategory());


            } else if (this.value == "update") {
                const updateCategoryIDInput = document.createElement("input");
                updateCategoryIDInput.id = "update-category-id";
                updateCategoryIDInput.setAttribute("placeholder", "Category ID");
                display.appendChild(updateCategoryIDInput);

                const updateCategoryNameInput = document.createElement("input");
                updateCategoryNameInput.id = "update-category-name";
                updateCategoryNameInput.setAttribute("placeholder", "Category name");
                display.appendChild(updateCategoryNameInput);

                const updateCategoryButton = document.createElement("button");
                updateCategoryButton.id = "update-category-button";
                updateCategoryButton.innerText = "Update";
                display.appendChild(updateCategoryButton);
                updateCategoryButton.addEventListener("click", () => UpdateCategory());

            } else if (this.value == "delete") {
                const deleteCategoryIDInput = document.createElement("input");
                deleteCategoryIDInput.id = "delete-category-id";
                deleteCategoryIDInput.setAttribute("placeholder", "Category ID");
                display.appendChild(deleteCategoryIDInput);

                const deleteCategoryButton = document.createElement("button");
                deleteCategoryButton.id = "delete-category-button";
                deleteCategoryButton.innerText = "Delete";
                display.appendChild(deleteCategoryButton);
                deleteCategoryButton.addEventListener("click", () => DeleteCategory());

            }
        }
    }

    /*** CREATE Category ***/
    const CreateCategory = () => {
        const categoryNameInput = document.getElementById("create-category-name");

        if (categoryNameInput.value === "") {
            console.log("Empty value");
            document.getElementById("category-error-warning-text").innerText = "Please enter values in all fields.";
        } else {
            const data = {
                "categoryName": categoryNameInput.value
            };

            postJSON(data);
        }
    }
    async function postJSON(data) {
        try {
            const response = await fetch("http://13.51.175.213:8080/home/add/category", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            console.log("Success:", result);
            window.location.reload();
        } catch (error) {
            console.error("Error is:", error);
        }

    }
    /*** UPDATE Category ***/
    const UpdateCategory = () => {

        const categoryIDInput = document.getElementById("update-category-id");
        const categoryNameInput = document.getElementById("update-category-name");

        if (categoryIDInput.value === "" || categoryNameInput.value === "") {
            console.log("Empty value");
            document.getElementById("category-error-warning-text").innerText = "Please enter values in all fields.";
        } else if (categoryIDInput.value != parseInt(categoryIDInput.value, 10) || categoryIDInput < 0) {
            console.log("ID value is not a positive number");
            document.getElementById("category-error-warning-text").innerText = "Please ensure ID fields are positive numbers.";
        } else {
            const data = {
                "categoryID": categoryIDInput.value, "categoryName": categoryNameInput.value
            };

            putJSON(data, categoryIDInput.value);
        }

    }
    async function putJSON(data, id) {
        try {
            await fetch(`http://13.51.175.213:8080/home/update/category/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            window.location.reload();
        } catch (error) {
            console.error("Error occurred :", error);
        }
    }
    /*** DELETE Category ***/
    const DeleteCategory = () => {
        const categoryID = document.getElementById("delete-category-id");

        if (categoryID.value == "") {
            console.log("Empty value");
            document.getElementById("category-error-warning-text").innerText = "Please enter values in all fields.";
        } else if (categoryID.value != parseInt(categoryID.value, 10) || categoryID.value < 0) {
            console.log("ID value is not a positive number");
            document.getElementById("category-error-warning-text").innerText = "Please ensure ID fields are positive numbers.";
        } else {
            const data = { "categoryID": categoryID.value };
            deleteJSON(data);
        }

    }
    async function deleteJSON(data) {
        try {
            await fetch(`http://13.51.175.213:8080/home/delete/category/${data.categoryID}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })
                .then(response => console.log(response));
            window.location.reload();
        } catch (error) {
            console.error("Error is:", error);
        }
    }
}
export default CategoryRadioInput;