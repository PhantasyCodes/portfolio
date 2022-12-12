import React from "react";
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
        </div>
    )
}

export default Home