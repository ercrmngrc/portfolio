import React from 'react'
import "./works.scss"
import { useState } from "react"

export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);
    
    const data = [
        {
            id: "1",
            icon: "assets/mobile.png",
            title: "Web Design",
            description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.",
            img: "assets/works1.jpeg",
        },
        {
            id: "2",
            icon: "assets/globe.png",
            title: "Mobile Application",
            description: "Ladida ladida ladida ladida ladida ladida.",
            img: "assets/works2.jpg",
        },
        {
            id: "3",
            icon: "assets/paper.png",
            title: "Branding",
            description: "Word word word word word word word word word word word word.",
            img: "assets/works3.jpg",
        },
    ];

    const handleClick = (way) => {
        way === "left" 
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };
    
    return (
        <div className = "works" id = "works">
            <div className = "slider" 
                style = {{transform: `translateX(-${currentSlide * 100}vw)`}}
            >
                {data.map ((d) => (
                    <div className = "container">
                        <div className = "item">
                            <div className = "left">
                                <div className = "leftContainer">
                                    <div className = "imgContainer">
                                        <img src = {d.icon} alt = "" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.description}</p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className = "right">
                                <img src = "assets/works1.jpg" alt = "" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img src = "assets/arrow.png" className = "arrow left" alt = "" onClick = {() => handleClick("left")} />
            <img src = "assets/arrow.png" className = "arrow right" alt = "" onClick = {() => handleClick()} />
        </div>
    ) 
}