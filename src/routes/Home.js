import React, { createContext, useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from 'framer-motion'
import ReactSwitch from "react-switch";

import Contact from "../components/Contact";
import Details from "../components/Details";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";

import './Home.css'

export const ThemeContext = createContext(null);

const Home = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const cursorSize = useMotionValue(16);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const mouseMove = e => {
            cursorX.set(e.clientX - 6);
            cursorY.set(e.clientY - 6);
        }

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove)
        }
    }, []);

    const [theme, setTheme] = useState("dark");
    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    } 

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div id={theme}>
                <Navbar /> 
                <Hero />
                <Details />
                <Portfolio />
                <Contact />
                <motion.div 
                    className="cursor"  
                    style={{
                        translateX: cursorXSpring,
                        translateY: cursorYSpring,

                        height: cursorSize,
                        width: cursorSize
                    }}
                />
                <div className="switch">
                    <ReactSwitch 
                    className="darkmoder"
                    onChange={toggleTheme} 
                    checked={theme === "dark"} 
                    onColor={"#2e2e2e"}/>
                </div>
            </div>
        </ThemeContext.Provider>
    )
}

export default Home