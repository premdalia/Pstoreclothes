import axios from "axios";
import React, { useEffect, useState } from "react";
import '../App.css';
import { Link } from "react-router-dom";
function Mobile() {
    const [mobiledata,setMobiledata]=useState([]);

    useEffect(()=>{
        axios
        .get("http://localhost:3000/api/data?s=mobile")
        .then((response)=>{
            setMobiledata(response.data);
        })
    },[])
    if(!mobiledata){
        return <h1>Loading....</h1>
    }

    return(
        <div className="App2">
        {mobiledata.map((mobile)=>(
            <div className="card" key={mobile.product_id}>
                <img src={mobile.product_images} alt={mobile.product_name} height="300px" width="400px"/>
                <h3 style={{textAlign:"left"}}>{mobile.product_name}</h3>
                <h3 style={{textAlign:"left"}}>₹{mobile.price}</h3>
                <div className="btn"><Link to={`/Details/${mobile.product_id}`}><button type="submit">More details</button></Link></div>
            </div>
        ))}

        </div>
    );
    
}
export default Mobile;