import React from "react";
import Buttons from "./button";




function Program(props){

return(
    <>
     <div className="card-cont">
     
     <div className="card">
     <div className="image">
     <img src={props.image} alt="pto"/>
     </div>
             <div className="tex">
             <h3>{props.name}</h3>
            <p>{props.desc}</p>
            <a href="@" onClick={()=>alert("werr")}><Buttons name = "read more" fontsize = '1.6rem'/></a>
            <p style={{marginLeft : '200px'}}>{props.date}</p>
             </div>  
        
        </div>

     </div>
    </>
)
}
export default Program

