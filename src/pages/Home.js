import axios from "axios";
import '../App.css';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";



function Home() {
  const [shoesdata, setShoesdata] = useState([]);
  const [searchtext, setSearchtext] = useState("");
  const [uniqueCompanies, setUniqueCompanies] = useState([]);

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
      <div>


      {/* <Carousel
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
    </Carousel> */}
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

      <Link to="/Cart"><button type="submit">Add to Cart</button></Link>
          </div>
        ))}
      </div>
      <Link to="/ALL"><button type="submit">Show more...</button></Link>
    </>
  );
}

export default Home;
