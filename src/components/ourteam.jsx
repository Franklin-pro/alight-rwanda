import React from "react";
import { Image } from "antd";

export default function Ourteam(props){
return (
    <>
       <div className="our-container">
       
        <div className="term">
        <div className="trm-image">
        <Image width={'100px'} height= {'100px'} src={props.image} alt="term" className="img"/>
        </div>
         <h3>{props.position}</h3>
         <p>{props.name}</p>
        </div>
       </div>

       
    </>
)
}