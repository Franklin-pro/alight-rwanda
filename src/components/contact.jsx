import { Button } from "@mui/material";
import React from "react";
// import axios from "axios";


export default function Contact(){
    // const [isContact,setIsContact] = useState({
        
    // })

  
    return (
        <>
            <div className="contact-container">
                <h1>Contact Us</h1>
                <div className="contact-us">
                    <div className="contact">
                        <form action="#" method="post">
                            <div className="field">
                                <label htmlFor="names">Names:</label>
                                <input type="text" name="names" placeholder="type-fullName"/>
                            </div>
                            <div className="field">
                                <label htmlFor="email">Email:</label>
                                <input type="email" name="email" placeholder="type-email"/>
                            </div>
                            <div className="field">
                                <label htmlFor="message">Message:</label>
                                <textarea cols={20} rows={4} name="message" placeholder="type-your-message"></textarea>
                            </div>
                            <div className="log">
                            <Button className="log-btn">Send</Button>
                                 </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}