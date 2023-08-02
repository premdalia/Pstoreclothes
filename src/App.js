// App.js
import './App.css';
import Shoes from './pages/shoes';
import Mobile from './pages/mobiles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './pages/nav';
import Home from './pages/Home';
// import Login from './pages/login';

import Login from './pages/login1';
import Search from './pages/Search';
import Details from './pages/Details';
import Clothes from './pages/clothes';

import Unisex from './pages/unisex';
import Women from './pages/Women';
// import './pages/all.css';

function App() {
  return (
    <div className="App">
      <Router>

        <Nav />
        <hr></hr>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Search/:searchtext" element={<Search />} />
          <Route path="/Details/:productid" element={<Details/>}/>
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/mobiles" element={<Mobile />} />
          <Route path="/Men" element={<Clothes />} />

          <Route path="/unisex" element={<Unisex />} />
          <Route path="/women" element={<Women />} />
          <Route path="/*" element={<h1>error</h1>} />
          <Route path="/login1" element={<Login />} />

          {/* <Route path="/login1" element={<Login />} /> */}
        </Routes>
        
       
        </Router>
       
    </div>
  );
}

export default App;
