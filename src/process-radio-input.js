import { useEffect } from "react";

const ProcessRadioInput = () => {
    const radioButtons = document.querySelectorAll('input[name="crud-user-input"]');
    for (const radioButton of radioButtons) {
        radioButton.addEventListener('change', displayRespectiveUI);
    }
}
export default ProcessRadioInput;

function displayRespectiveUI(e) {
    const display = document.getElementById("local-db-interaction");
    if (this.checked) {
        display.innerHTML = "";
        if (this.value == "create") {
            const createFirstNameInput = document.createElement("input");
            createFirstNameInput.id = "create-first-name";
            createFirstNameInput.setAttribute("placeholder", "First name");
            display.appendChild(createFirstNameInput);

            const createLastNameInput = document.createElement("input");
            createLastNameInput.id = "create-last-name";
            createLastNameInput.setAttribute("placeholder", "Last name");
            display.appendChild(createLastNameInput);

            const createSubmitButton = document.createElement("button");
            createSubmitButton.id = "create-submit-button";
            createSubmitButton.innerText = "Create";
            display.appendChild(createSubmitButton);
            createSubmitButton.addEventListener("click", () => CreatePlayer());


        } else if (this.value == "update") {
            const updatePlayerIDInput = document.createElement("input");
            updatePlayerIDInput.id = "update-player-id";
            updatePlayerIDInput.setAttribute("placeholder", "Player ID");
            display.appendChild(updatePlayerIDInput);

            const updateFirstNameInput = document.createElement("input");
            updateFirstNameInput.id = "update-first-name";
            updateFirstNameInput.setAttribute("placeholder", "First name");
            display.appendChild(updateFirstNameInput);

            const updateLastNameInput = document.createElement("input");
            updateLastNameInput.id = "update-last-name";
            updateLastNameInput.setAttribute("placeholder", "Last name");
            display.appendChild(updateLastNameInput);

            const updatePlayerButton = document.createElement("button");
            updatePlayerButton.id = "update-submit-button";
            updatePlayerButton.innerText = "Update";
            display.appendChild(updatePlayerButton);
            updatePlayerButton.addEventListener("click", () => UpdatePlayer());

        } else if (this.value == "delete") {
            const deletePlayerIDInput = document.createElement("input");
            deletePlayerIDInput.id = "delete-input";
            deletePlayerIDInput.setAttribute("placeholder", "Player ID");
            display.appendChild(deletePlayerIDInput);

            const deletePlayerButton = document.createElement("button");
            deletePlayerButton.id = "delete-button";
            deletePlayerButton.innerText = "Delete";
            display.appendChild(deletePlayerButton);
            deletePlayerButton.addEventListener("click", () => DeletePlayer());

        }
    }
}

/*** CREATE PLAYER ***/
const CreatePlayer = () => {

    const firstNameInput = document.getElementById("create-first-name");
    const lastNameInput = document.getElementById("create-last-name");

    const data = { "first_name": firstNameInput.value, "last_name": lastNameInput.value };

    postJSON(data);

}
async function postJSON(data) {
    try {
        const response = await fetch("http://localhost:3001/player/create", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        console.log("Success:", result);
    } catch (error) {
        console.error("Error is:", error);
    }
}

/*** UPDATE PLAYER ***/
const UpdatePlayer = () => {

    const playerIDInput = document.getElementById("update-player-id");
    const firstNameInput = document.getElementById("update-first-name");
    const lastNameInput = document.getElementById("update-last-name");

    const data = { "player_id": playerIDInput.value, "first_name": firstNameInput.value, "last_name": lastNameInput.value };

    putJSON(data);

}
async function putJSON(data) {
    try {
        const response = await fetch("http://localhost:3001/player/update", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        console.log("Success:", result);
    } catch (error) {
        console.error("Error is:", error);
    }
}
/*** DELETE PLAYER ***/
const DeletePlayer = () => {
    const playerID = document.getElementById("delete-input");

    const data = { "player_id": playerID.value };

    deleteJSON(data);

}
async function deleteJSON(data) {
    try {
        const response = await fetch("http://localhost:3001/player/delete", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        console.log("Success:", result);
    } catch (error) {
        console.error("Error is:", error);
    }
}
