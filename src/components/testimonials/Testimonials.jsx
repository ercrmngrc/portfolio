import React from 'react'
import "./testimonials.scss"

export default function Testimonials() {
    
    const data = [
        {
            id: 1,
            name: "Hannah Baker",
            title: "Senior Developer",
            img: "https://static.onecms.io/wp-content/uploads/sites/14/2017/05/04/050417-13-reasons-2000.jpg",
            icon: "assets/youtube.png",
            description: "Keep jeep jeep jeep jeep jeep jeep jeep jeep jeep.",
        },
        {
            id: 2,
            name: "Paulo Wachope",
            title: "Co-Founder of Ticos",
            img: "https://pbs.twimg.com/profile_images/462072517306228736/Errb6Efc_400x400.jpeg",
            icon: "assets/twitter.png",
            description: "Is piss piss piss piss piss piss piss.",
            featured: true,
        },
        {
            id: 3,
            name: "Ru Paul",
            title: "Queen Slay",
            img: "https://cdns-images.dzcdn.net/images/artist/d84d8f8613211bccf0ba1ebad0c8604c/500x500.jpg",
            icon: "assets/twitter.png",
            description: "Loopy loopy loopy loopy loopy loopy loopy loopy loopy.",
        },
    ];
    
    return (
        <div className = "testimonials" id = "testimonials">
            <h1>Testimonials</h1>
            <div className = "container">
                {data.map ((d) => (
                    <div className = {d.featured ? "card featured" : "card"}>
                        <div className = "top">
                            <img src = "assets/rightarrow.png" className = "left" alt = "" />
                            <img src = {d.img} className = "user" alt = "" />
                            <img src = {d.icon} className = "right" alt = "" />
                        </div>
                        <div className = "center">{d.description}</div>
                        <div className = "bottom">
                            <h3>{d.name}</h3>
                            <h4>{d.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
