import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import '../App.css';
function Details() {

    const { productid } = useParams();
    const [details, setDetails] = useState([]);

    useEffect(()=>{
        axios
        .get(`http://localhost:3000/api/data?id=${productid}`)
        .then((response)=>{
            setDetails(response.data);
        })
    }, [productid] );
    if (!details) {
        return <h1>Loading...</h1>
    }
    return (
        <>
            <div className="detailcard">
            <div className="dproductimage">
                    <img src={details.product_images} alt={details.product_name} height="300px" width="400px" /></div>
               <div className="dproductdetails">
               <h3 style={{textAlign:"left"}}>{details.product_name}</h3>
                <h3 style={{textAlign:"left"}}>₹{details.price}</h3>
               </div>
            </div>
        </>

    );
}
export default Details;