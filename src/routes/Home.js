import React from "react";
import Contact from "../components/Contact";
import DarkMode from "../components/DarkMode";
import Details from "../components/Details";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";

const Home = () => {
    return (
        <div>
            <Navbar />
            <DarkMode />
            <Hero />
            <Details />
            <Portfolio />
            <Contact />
        </div>
    )
}

export default Home