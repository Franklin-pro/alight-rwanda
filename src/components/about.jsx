import React from "react";
// import term from "../assets/Dayalight.jpg";
import { Link } from "react-router-dom";
import ReadMore from "./readmore";

function About() {

  const backgroundImage = {
    backgroundImage: `linear-gradient(to bottom, rgba(253, 253, 253, 0.52), rgba(1, 1, 1, 0.73)), url("https://charity.org/wp-content/uploads/2020/01/Day-39-hero_logo.jpg")`,
    // backgroundColor:'red',
    backgroundPosition: '50% 20%', 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    height: '63vh',
    backgroundColor:'black',
  
  
  }
  const longTest =
    "With over two decades of continuous presence in Rwanda,Alight has been playing a critical role in helping displaced peoplerebuild their lives. Today, Alight Rwanda works in all five refugee camps in the country, serving mostlCongolese and Burundian refugees. In the past, Alight Rwanda has also supported displaced communities in three urban areas and three refugee reception and transit centers.Alight Rwanda works closely with key stakeholders including the Rwandan Government, U.S Government agencies, and the United Nations (UN)"
    const longTests =
    "With over two decades of continuous presence in Rwanda,Alight has been playing a critical role in helping displaced peoplerebuild their lives. Today, Alight Rwanda works in all five refugee camps in the country, serving mostlCongolese and Burundian refugees. In the past, Alight Rwanda has also supported displaced communities in three urban areas and three refugee reception and transit centers.Alight Rwanda works closely with key stakeholders including the Rwandan Government, U.S Government agencies, and the United Nations (UN)"
  return (
    <>
      <div className="about-container">
      
        <div className="abouts">
        <div style={backgroundImage} className="about-image">

        </div>
        
          <div className="about-text">
          <div className="about">
           <h1>ABOUT</h1>
           <div className="serv">
              <Link to="/" className="link">Our mission</Link>
              <Link to="/" className="link">Our Alight</Link>
              <Link to="/" className="link">carrer</Link>
              <Link to="/" className="link">Executive Team</Link>
            </div>
      
           </div>
          <div className="text">
          <h3>OUR ORGANISATION ALIGHT RWANDA</h3>
        
           <p>{longTest}</p>
            <ReadMore text={longTests} maxLength={100}></ReadMore>
          </div>
          
          
           
            
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
