import React,{useEffect} from "react";
 
const Register = () => {
    useEffect(() => {
        document.getElementById("title").innerHTML = "Register"
    },[]);
    return (
        <div>
            <h1>Sign Up Successful</h1>
        </div>
    );
};
 
export default Register;