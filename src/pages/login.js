import React, { useEffect } from "react";

const Login = () => {
    useEffect(() => {
        document.getElementById("title").innerHTML = "Login"
    }, []);
    return (
        <>
        <center>

        <div>
            <label for="username">Username</label>
            <input type="text" id="username" name="username" />
            <label for="password">Password</label>
            <input type="password" id="password" name="password" />
            <input type="submit" value="Submit" />

        </div>
        
        </center>
        </>
    );
};

export default Login;