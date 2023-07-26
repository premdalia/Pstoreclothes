// App.js
import './App.css';
import Shoes from './pages/shoes';
import Mobile from './pages/mobiles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './pages/nav';
import Home from './pages/Home';
import Search from './pages/Search';
import Details from './pages/Details';

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
          <Route path="/*" element={<h1>error</h1>} />

        </Routes></Router>
    </div>
  );
}

export default App;
