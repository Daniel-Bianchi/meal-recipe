import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import Random from './components/Random';
import Contact from './components/Contact';
  
//import './style.css';
  
export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>            
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/search">Recherche d'une recette</Link>
            </li>
            <li>
              <Link to="/random">Une recette au hasard</Link>
            </li>
            <li>
            <Link to="/contact">Une suggestion ?</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/random" element={<Random />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}