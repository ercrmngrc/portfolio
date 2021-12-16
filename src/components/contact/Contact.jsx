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
                <img src = "https://lh3.googleusercontent.com/proxy/x9__WRmYiRr5NZEC4_GhM9hA3rqI4cc2s6V0WbdmZW7tRBn1gznsY0H5lkq50RMuU_iXLz_v40LnwvWEgUMFamCGRk308VY" alt="" />
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
