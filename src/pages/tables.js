import React,{useEffect} from "react";
 
const Tables = () => {
    useEffect(() => {
        document.getElementById("title").innerHTML = "Tables"
    },[]);
    return (
        <div>
            <h1>Sign Up Successful</h1>
        </div>
    );
};
 
export default Tables;