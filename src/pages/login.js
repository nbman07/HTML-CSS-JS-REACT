import React,{useEffect} from "react";
 
const Login = () => {
    useEffect(() => {
        document.getElementById("title").innerHTML = "Login"
    },[]);
    return (
        <div>
            <h1>Display Login</h1>
        </div>
    );
};
 
export default Login;