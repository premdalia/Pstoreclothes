// nav.js
import React, { useState } from "react";
import '../App.css';
import { Link } from "react-router-dom";

function Nav() {
  const [ searchtext, setSearchinput ] = useState("");
  function sendvalue(e){
    setSearchinput(e.target.value);}
  return (
    <div className="header">
      <Link to="/"><h1></h1></Link>
      <form className="search">
        <input  style={{height:"40px" ,width:"600px"
        }} className="mainsearch" type="search" name="search" value={searchtext} onChange={sendvalue}/>
        <Link to={`/Search/${searchtext}`}><button className="but" style={{height:"40px" ,width:"80px"
        }} type="submit">Search</button></Link>
      </form>
      <nav>
          <ul className="nav_links">
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
              <Link to="/Women">women</Link>
            </li>
          </ul>
        </nav>
     
    </div>
  );
}

export default Nav;
