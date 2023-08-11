import axios from "axios";
import React, { useEffect, useState } from "react";
import '../App.css';
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
function ALL() {
    const [shoesdata,setShoesdata]=useState([]);

    useEffect(()=>{
        axios
        .get("https://fluffy-bear-veil.cyclic.app/?sub=clothes")
        .then((response)=>{
            setShoesdata(response.data);
        })
    },[])
    if(!shoesdata){
        return <h1>Loading....</h1>
    }

    return(
        <>
        
        {/* <Carousel 

interval={1500}
pause="hover"
wrap={true}
onSlide={(slideIndex) => console.log(`Active Slide: ${slideIndex}`)}
>
{shoesdata.map((items) => (
  <Carousel.Item key={items.product_id}>
    <Link to={`/Details/${items.product_id}`}>
      <img
        className="d-block w-100"
        src={items.product_images}
        alt={items.product_name}  height="500px" width="500px"
      />
    </Link>
     <Carousel.Caption className="d-none d-md-block">
      <h3 style={{color:"red"}}>{items.product_name}</h3>
    </Carousel.Caption> 
  </Carousel.Item>
))}
</Carousel><br></br> */}
      
       
        
        <div className="App2">
        {shoesdata.map((shoes)=>(
            <div className="card" key={shoes.product_id}>
                <img src={shoes.product_images} alt={shoes.product_name} height="300px" width="300px"/>
                <h3 style={{textAlign:"left"}}>{shoes.product_name}</h3>
                <h3 style={{textAlign:"left"}}>₹{shoes.price}</h3>
                 <div className="btn"><Link to={`Details/${shoes.product_id}`}><button type="submit">More details</button></Link></div> 
            </div>
        ))}

        </div></>
    );
    
}
export default ALL;