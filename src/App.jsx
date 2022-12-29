//Css
import './assets/css/App.css';

//Framework
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams
} from "react-router-dom"
import '../src/fetch'

//Database
import kasa from "./assets/database/kasa.json"

//pages
import PageNotFound from './pages/404';
import Product from './pages/product';
import Index from './pages/index';
import About from './pages/about';

import Header from './components/header';
import Footer from './components/footer';


//function who's find the  ID URL and compare if the ID of KASA is the same
function ProductView() {
  const { id } = useParams();
  let product = kasa.find(i => i.id === id)

  if (!product) {
    return <PageNotFound />;
  }
  return <Product element={<Product/>} />;
}


//Router's Logic
function App() {
  return (
    <div className='home'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/apartments/:id" element={<ProductView />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
