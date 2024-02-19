import React,{useEffect} from "react";
 
const Register = () => {
    useEffect(() => {
        document.getElementById("title").innerHTML = "Register"
    },[]);
    return (
        <div>
            <h1>Display Register</h1>
        </div>
    );
};
 
export default Register;