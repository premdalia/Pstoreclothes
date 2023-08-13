// nav.js
import React, { useState } from "react";
import './nav.css';
import { NavLink,Link,useNavigate } from "react-router-dom";
function Nav() {
  const [ searchtext, setSearchinput ] = useState("");
  function sendvalue(e){
    setSearchinput(e.target.value);}

    const isAuthenticated = !!localStorage.getItem('token');
    const navigate = useNavigate();
  
    const handleLogout = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      
      navigate('/');
      alert("you are logout")
    };

    
  return (
    <>
    <div className="header">
      <h1 className="logo">P_Store</h1>
</div>
       <div>
      <form className="search">
        <input  style={{height:"40px" ,width:"600px"
        }} className="mainsearch" type="search" name="search" value={searchtext} onChange={sendvalue} placeholder="Enter Category"/>
        <NavLink to={`/Search/${searchtext}`}><button className="but" style={{height:"40px" ,width:"80px"
        }} type="submit">Search</button></NavLink>
      </form><br />
      
     <div style={{ textDecoration: "none"}}>
     <nav>
     <ul className="nav_Navlinks" >
      {/* style={{ listStyle: "none",textDecoration: "none"}} */}
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {/* <li>
              <NavLink to="/shoes">Shoes</NavLink>
            </li>
            <li>
              <NavLink to="/mobiles">Mobiles</NavLink>
            </li> */}
            <li>
              <NavLink to="/Men">Men</NavLink>
            </li>
            <li>
              <NavLink to="/Women">Women</NavLink>
            </li>
         
            <li>
              <NavLink to="/unisex">Unisex</NavLink>
            </li>
            <li>
              <NavLink to="/Cart">Cart🛒</NavLink>
            </li>
            {isAuthenticated ? (
        // Show Logout button when user is authenticated
        <button type="submit" onClick={handleLogout}>Logout</button>
      ) : (
        // Show Register and Sign In buttons when user is not authenticated
        <>
          {/* <Link to="/signup"><button type="submit">Register</button></Link> */}
          <Link to="/signin"><button type="submit">Sign In</button></Link>
        </>
      )}

           

            {/* <li>
             <button onClick={logout}> Log Out</button>
            </li> */}
          </ul>
       
          </nav>
     </div>
          
        
     
    </div></>
  );
}

export default Nav;
