import axios from "axios";
import React, { useEffect, useState } from "react";
import '../App.css';
import { Link } from "react-router-dom";
function Women() {
    const [clothesdata,setCothesdata]=useState([]);

    useEffect(()=>{
        axios
        .get("http://localhost:3000/api/data?sub=clothes&g=woman")
        .then((response)=>{
            setCothesdata(response.data);
        })
    },[])
    if(!clothesdata){
        return <h1>Loading....</h1>
    }

    return(
        <div className="App2">
        {clothesdata.map((clothes)=>(
            <div className="card" key={clothes.product_id}>

<Link to={`../Details/${clothes.product_id}`} className="btn">

                <img src={clothes.product_images} alt={clothes.product_name} height="300px" width="300px"/>
                <h3 style={{textAlign:"left"}}>{clothes.product_name}</h3>
                <h3 style={{textAlign:"left"}}>₹{clothes.price}</h3>
                </Link>
                {/* <div className="btn"><Link to={`/Details/${clothes.product_id}`}><button type="submit">More details</button></Link></div> */}
            </div>
        ))}

        </div>
    );
    
}
export default Women;