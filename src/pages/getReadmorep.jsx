import React from "react";
import GetReadmore from "../components/getReadmore";
import Footer from "../components/footer";
import NavBar from "../components/navbar";

export default function ReadmorePage(){
    return(
        <>
        <NavBar/>
            <GetReadmore/>
            <Footer/>
            
        </>
    )
}