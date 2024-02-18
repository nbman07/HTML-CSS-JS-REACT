import React,{useEffect} from "react";
 
const Login = () => {
    useEffect(() => {
        document.getElementById("title").innerHTML = "Login"
    },[]);
    return (
        <div>
            <h1>Sign Up Successful</h1>
        </div>
    );
};
 
export default Login;