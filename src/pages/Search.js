import axios from "axios";
import React, { useEffect, useState } from "react";
import '../App.css';
import { useParams } from "react-router";
import { Link } from "react-router-dom";
function Search() {
    const { searchtext } = useParams();
    const [searchdata,setSearchdata]=useState([]);

    useEffect(()=>{
        axios
        .get(`http://localhost:3000/api/data?sub=${searchtext}`)
        .then((response)=>{
            setSearchdata(response.data);
        })
    }, [searchtext] );
    if(!searchdata){
        return <h1>Loading....</h1>
    }

    return(
        <div className="App2">
        {searchdata.map((clothes)=>(
            <div className="card">
             <Link to={`../Details/${clothes.product_id}`} className="btn">

             <img src={clothes.product_images} alt={clothes.product_name} height="300px" width="300px"/>
             <h3 style={{textAlign:"left"}}>{clothes.product_name}</h3>
             <h3 style={{textAlign:"left"}}>₹{clothes.price}</h3></Link></div>
            // <div className="card" key={searchvalue.product_id}>
            //     <h3>{searchvalue.product_name}</h3>
            //     <img src={searchvalue.product_images} alt={searchvalue.product_name} height="300px" width="400px"/>
            //     <div className="btn"><Link to={`/Details/${searchvalue.product_id}`}><button type="submit">More details</button></Link></div>
            // </div>
        ))}

        </div>
    );
    
}
export default Search;