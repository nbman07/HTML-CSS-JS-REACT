import React, { useEffect } from "react";

const Login = () => {
    useEffect(() => {
        document.getElementById("title").innerHTML = "Login"
    }, []);
    return (
        <center>
            <div id="login-login">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
                <input type="submit" value="Submit" />

            </div>
        </center>
    );
};

export default Login;