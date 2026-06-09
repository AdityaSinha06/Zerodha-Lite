import { useState } from 'react'
import './App.css'
import {BrowserRouter , Routes , Route} from "react-router-dom";
import HomePage from './landing-page/home/HomePage';
import Signup from "./landing-page/signup/Signup.jsx";
import AboutPage from './landing-page/about/AboutPage.jsx';
import ProductsPage from './landing-page/products/ProductsPage.jsx';
import PricingPage from './landing-page/pricing/PricingPage.jsx';
import SupportPage from './landing-page/support/SupportPage.jsx';
import Navbar from './landing-page/Navbar.jsx';
import Footer from './landing-page/Footer.jsx';
import NotFound from './landing-page/NotFound.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/products" element={<ProductsPage/>}></Route>
        <Route path="/pricing" element={<PricingPage/>}></Route>
        <Route path="/support" element={<SupportPage/>}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
