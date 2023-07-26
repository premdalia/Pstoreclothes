import axios from "axios";
import React, { useEffect, useState } from "react";
import '../App.css';
import { Link } from "react-router-dom";
function Shoes() {
    const [shoesdata,setShoesdata]=useState([]);

    useEffect(()=>{
        axios
        .get("http://localhost:3000/api/data?s=shoes")
        .then((response)=>{
            setShoesdata(response.data);
        })
    },[])
    if(!shoesdata){
        return <h1>Loading....</h1>
    }

    return(
        <div className="App2">
        {shoesdata.map((shoes)=>(
            <div className="card" key={shoes.product_id}>
               
                <img src={shoes.product_images} alt={shoes.product_name} height="300px" width="400px"/>
                <h3 style={{textAlign:"left"}}>{shoes.product_name}</h3>
                <h3 style={{textAlign:"left"}}>₹{shoes.price}</h3>
                <div className="btn"><Link to={`/Details/${shoes.product_id}`}><button type="submit">More details</button></Link></div>
            </div>
        ))}

        </div>
    );
    
}
export default Shoes;