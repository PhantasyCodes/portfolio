import React from "react";
import DarkMode from "../components/DarkMode";
import Details from "../components/Details";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar />
            <DarkMode />
            <Hero />
            <Details />
        </div>
    )
}

export default Home