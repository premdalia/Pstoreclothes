// nav.js
import React, { useState } from "react";
import './nav.css';
import { Link } from "react-router-dom";

function Nav() {
  const [ searchtext, setSearchinput ] = useState("");
  function sendvalue(e){
    setSearchinput(e.target.value);}



    const logout = () => {
      localStorage.clear();
      window.location.reload();
    };
  return (
    <>
    <div className="header">
      <h1 style={{ fontFamily:"Playfair Display"}}>P_Store</h1>
</div>
       <div>
      <form className="search">
        <input  style={{height:"40px" ,width:"600px"
        }} className="mainsearch" type="search" name="search" value={searchtext} onChange={sendvalue}/>
        <Link to={`/Search/${searchtext}`}><button className="but" style={{height:"40px" ,width:"80px"
        }} type="submit">Search</button></Link>
      </form><br />
      
     <div style={{ textDecoration: "none"}}>
     <nav>
     <ul className="nav_links" >
      {/* style={{ listStyle: "none",textDecoration: "none"}} */}
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="/shoes">Shoes</Link>
            </li>
            <li>
              <Link to="/mobiles">Mobiles</Link>
            </li> */}
            <li>
              <Link to="/Men">Men</Link>
            </li>
            <li>
              <Link to="/Women">Women</Link>
            </li>
         
            <li>
              <Link to="/unisex">Unisex</Link>
            </li>
            <li>
             <button onClick={logout}> Log Out</button>
            </li>
          </ul>
          </nav>
     </div>
          
        
     
    </div></>
  );
}

export default Nav;
