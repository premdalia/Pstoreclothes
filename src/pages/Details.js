import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
// import '../App.css';
import './Details.css'
function Details() {

    const { productid } = useParams();
    const [details, setDetails] = useState([]);

    useEffect(()=>{
        axios
        .get(`https://fluffy-bear-veil.cyclic.app/?id=${productid}`)
        .then((response)=>{
            setDetails(response.data);
        })
    }, [productid] );


    const addToCart = () => {
        // Logic to add the current product to the cart
        // You can use local storage or state management library for this
        // For simplicity, let's assume you're using local storage
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.push(details);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        alert("Product add successfully in cart");
}




    if (!details) {
        return <h1>Loading...</h1>
    }
    return (
        <>
            <div className="detailcard">
            <div className="dproductimage">
                    <img src={details.product_images} alt={details.product_name}  /></div>
                    {/* height="300px" width="400px" */}
               <div className="dproductdetails">
               <h3 >{details.product_name}</h3>
                <h3 >₹{details.price}</h3>
                <button onClick={addToCart}>Add to Cart</button>



                </div>
               </div>
            
        </>

    );
}
export default Details;