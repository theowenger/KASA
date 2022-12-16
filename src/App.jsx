//Css
import './assets/css/App.css';

//Framework
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

//pages
import PageNotFound from './pages/404';
import Product from './pages/product';
import Index from './pages/index';
import About from './pages/about';


function App() {
  return (
  <Router>
    <Routes>
    <Route path="" element={<Index />} />
    <Route path="products/:productId" element={<Product />} />
    <Route path="about" element={<About />} />
    <Route path="*" element={<PageNotFound />} />
    </Routes>
  </Router>
)}

export default App;
