import axios from "axios";
import '../App.css';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";



function Home() {
  const [shoesdata, setShoesdata] = useState([]);
  const [searchtext, setSearchtext] = useState("");
  const [uniqueCompanies, setUniqueCompanies] = useState([]);
  


const offer = [
  {
    "id":20000,
  "offerimage":"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/0174e4d7-448c-4746-8572-69461ad5be101659020268081-Tops---Tees_Desk.jpg"
},
{"id":20001,
  "offerimage":"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg "
},
{"id":20002,
  "offerimage":"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/30/e8aea330-10cd-4778-91ab-da9678161ec11690739860849-PB-Banner_Wishlist-Now.jpg"
},
{"id":20003,
  "offerimage":"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/b656a7f4-4688-4997-bb7c-54b78793981e1658752386588-Western-Wear_Desk.jpg"
},
{"id":20004,
  "offerimage":"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/179e278f-77ee-44c2-bf39-9f00b0cd08e01658752429301-Handbags_Desk.jpg"
},
];


  useEffect(() => {
    axios.get("https://fluffy-bear-veil.cyclic.app/?sub=clothes")
      .then((response) => {
        setShoesdata(response.data);
        const companies = [...new Set(response.data.map(item => item.company_name))];
        setUniqueCompanies(companies);
      });
  }, []);

  useEffect(() => {
    let url = "https://fluffy-bear-veil.cyclic.app/?sub=clothes";

    if (searchtext && searchtext !== " ") {
      url += `&cn=${searchtext}`;
    }

    axios.get(url)
      .then((response) => {
        setShoesdata(response.data);
      });
  }, [searchtext]);

  if (!shoesdata) {
    return <h1>Loading....</h1>;
  }

  function onChange(e) {
    setSearchtext(e.target.value);
  }

  return (
    <>

<Carousel
      interval={1500}
      pause="hover"
      wrap // This will make the carousel repeat automatically
      onSlide={(slideIndex) => console.log(`Active Slide: ${slideIndex}`)}
    >
      {offer.map((items) => (
        <Carousel.Item key={items.id}>
          <Link to="/clothes">
            <img className="d-block w-100" src={items.offerimage} alt={`Slide ${items.id}`} />
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
    <hr></hr>
      <div className="drop">


  
        <select
          className="dropdown"
          value={searchtext}
          onChange={onChange} 
        >
          <option>Select Brand</option>
          <option value=" ">All</option>
          {uniqueCompanies.map((company) => (
            <option key={company} value={company}>
              {company}
            </option>
          ))}
        </select>
      </div>

      <div className="App2">
        {shoesdata.slice(0, 8).map((shoes) => (
          <div className="card" key={shoes.product_id}>
            <Link to={`Details/${shoes.product_id}`} className="btn">
              <img src={shoes.product_images} alt={shoes.product_name} height="300px" width="300px" />
              <h3 style={{ textAlign: "left" }}>{shoes.product_name}</h3>
              <h3 style={{ textAlign: "left" }}>₹{shoes.price}</h3>
            </Link>

      {/* <Link to="/Cart"><button type="submit">Add to Cart</button></Link> */}
          </div>
        ))}
      </div>
      <Link to="/ALL"><button type="submit">Show more...</button></Link>
    </>
  );
}

export default Home;
