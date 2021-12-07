import React from 'react'
import "./intro.scss"

export default function Intro() {
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
                    <h3>King of The Pirates<span></span></h3>
                </div>
                <a href = "#portfolio">
                    <img src = "assets/downArrow.png" alt = ""/>
                </a>
            </div>
        </div>
    )
}
