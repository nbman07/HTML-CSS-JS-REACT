import React, { useEffect } from "react";

const Register = () => {
    useEffect(() => {
        document.getElementById("title").innerHTML = "Register"
    }, []);
    return (
        <center>
            <div id="register-page">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" name="confirm-password" />
                <input type="submit" value="Submit" />

            </div>
        </center>
    );
};

export default Register;