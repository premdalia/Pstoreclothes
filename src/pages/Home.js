import axios from "axios";
import '../App.css';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [shoesdata, setShoesdata] = useState([]);
  const [searchtext, setSearchtext] = useState("");
  const [uniqueCompanies, setUniqueCompanies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/data?sub=clothes")
      .then((response) => {
        setShoesdata(response.data);
        const companies = [...new Set(response.data.map(item => item.company_name))];
        setUniqueCompanies(companies);
      });
  }, []);

  useEffect(() => {
    let url = "http://localhost:3000/api/data?sub=clothes";

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
