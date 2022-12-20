//Css
import './assets/css/App.css';

//Framework
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import '../src/fetch'

//pages
import PageNotFound from './pages/404';
import Product from './pages/product';
import Index from './pages/index';
import About from './pages/about';

import kasa from "./assets/database/kasa.json"


function App() {
  return (
  <Router>
    <Routes>
    <Route path="/" element={<Index />} />
    {kasa.map((e) => (
      <Route path="/apartments/:id" element={<Product />} />
                    ))}
    <Route path="/about" element={<About />} />
    <Route path="/*" element={<PageNotFound />} />
    </Routes>
  </Router>
)}

export default App;
