// App.js
import './App.css';
import Shoes from './pages/shoes';
import Mobile from './pages/mobiles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './pages/nav';
import Home from './pages/Home';
// import Login from './pages/login';

import Search from './pages/Search';
import Details from './pages/Details';
import Clothes from './pages/clothes';

import Unisex from './pages/unisex';
import Women from './pages/Women';
import ALL from './pages/All';
import  Cart  from './pages/Cart/cart';
import SignIn from './pages/signin';
import Signup from './pages/signup';
// import './pages/all.css';

function App() {
  return (
    <div className="App">
      <Router>

        <Nav />
        {/* <hr></hr> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Search/:searchtext" element={<Search />} />
          <Route path="/Details/:productid" element={<Details/>}/>
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/mobiles" element={<Mobile />} />
          <Route path="/Men" element={<Clothes />} />
          <Route path="/ALL" element={<ALL />} />
          <Route path="/Cart" element={<Cart />} />

          {/* <Route path="/Cart" element={<Cart />} /> */}
          <Route path="/unisex" element={<Unisex />} />
          <Route path="/women" element={<Women />} />
          <Route path="/*" element={<h1>error</h1>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />


          {/* <Route path="/login1" element={<Login />} /> */}
        </Routes>
        
       
        </Router>
       
    </div>
  );
}

export default App;
