import React from "react";
import Testmonial from "../components/testimonial";
import NavBar from "../components/navbar";
import Footer from "../components/footer";



export default function Testimonials(){
    return (
        <>
        <NavBar/>
        <div className="texas">
        <div className="tes">
        <h1>TESTIMONIALS</h1>
        <p>Alight’s annual report outlines the organization’s activities throughout the preceding year. It is i.</p>
        </div>
       <div className="testas">
       <Testmonial/>
          
            
       </div>
           
        </div>
            <Footer/>
        </>
    )
}