import React from 'react';
import NavBarComponent from '../Components/Starting Pages/NavBar';
import Footer from './Starting Pages/Footer';
import HomePageContent from './Starting Pages/HomePageContent';
import { Routes, Route } from "react-router-dom";
import './StartingScreen.css'

// Links Components Below:
import About from "./Starting Pages/AboutPage";
import Products from "./Starting Pages/Products";
import Support from "./Starting Pages/Support";
import Contact from "./Starting Pages/ContactUs";
import UserLogin from "./../Components/UserLogin";

function StartingScreen() {
    return (
        <>
            <NavBarComponent />
            <main>
                <Routes>
                    {/* Links */}
                    <Route path="/" element={< HomePageContent /> }/>
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<UserLogin />} />
                </ Routes>
                
            </main>
            <Footer />
        </>
    )
}

export default StartingScreen