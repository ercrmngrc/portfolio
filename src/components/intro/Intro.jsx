import React from 'react'
import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {
    const textRef = useRef();
    
    useEffect(() => {
        init(textRef.current, { 
            showCursor: true, 
            backDelay: 1500,
            backSpeed: 60,
            strings: ["The King of the", "Pirates"], 
        });
    }, []);
    
    return (
        <div className = "intro" id = "intro">
            <div className = "left">
                <div className = "imgContainer">
                    <img src = "assets/luffy1.png" alt = ""/>
                </div>
            </div>
            <div className = "right">
                <div className = "wrapper">
                    <h2>Hi There I'm</h2>
                    <h1>Monkey D. Luffy</h1>
                    <h3>I'm gonna become <span ref = {textRef}></span></h3>
                </div>
                <a href = "#portfolio">
                    <img src = "assets/downArrow.png" alt = ""/>
                </a>
            </div>
        </div>
    )
}
