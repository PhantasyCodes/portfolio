import React from "react";
import DarkMode from "../components/DarkMode";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar />
            <DarkMode />
            <Hero />
        </div>
    )
}

export default Home