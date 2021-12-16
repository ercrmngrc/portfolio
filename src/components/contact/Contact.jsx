import React from 'react'
import "./contact.scss"
import { useState } from 'react'

export default function Contact() {

    const [message, setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true)
    }

    return (
        <div className = "contact" id = "contact">
            <div className = "left">
                <div className = "imgContainer">
                    <img src = "https://www.nicepng.com/png/detail/277-2774202_handshake-clipart-shake-hands-clipart-png.png" alt="" />
                </div>
            </div>
            <div className = "right">
                <h2>Contact.</h2>
                <form onSubmit = {handleSubmit}>
                    <input type = "text" placeholder = "Email" />
                    <textarea placeholder = "Message"></textarea>
                    <button type = "submit">Send</button>
                    {message && <span>Thanks, I will reply ASAP</span>}
                </form>
            </div>
        </div>
    )
}
