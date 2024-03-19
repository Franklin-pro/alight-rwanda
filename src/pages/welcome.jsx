import React from "react";
import NavBar from "../components/navbar";
import Home from "../components/home";

import Program from "../components/program";

import Who from "../components/whoWeAre";
import Footer from "../components/footer";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect,useState } from "react";
import axios from "axios";





function Welcome(){

    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
    const [isData,setIsData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:3030/api/v1/program');
            setIsData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
            // Handle error or setRecords([]) based on your requirement
           
            setIsData([])
          }
          
        };
   
        fetchData([]);
      }, []);
      console.log(isData);

    return(
        <>
            <NavBar/>
            <Home/>
            
            <div className="cardss">
            <h1>OUR PROGRAMS</h1>
            <div className="cards"> 
            {isData ? (isData.data.map((program)=>(
                <div data-aos = "fade-up">
            <Program image = {program.ProgramImage} name = {program.ProgramTitle} desc= {program.ProgramSummaryDiscription} date = {program.CreatedDate} />
            </div>
            ))): (
                <p>Loading</p>
            )}
            
            {/* <div data-aos = "fade-right">
            <Program image = {violence} name = "violence" desc= "nutrition for nyabiheke camp"/>
            </div>
            <div data-aos = "zoom-in">
            <Program image = {nutr} name = "Nutrition" desc= "nutrition for nyabiheke camp"/>
            </div>
            <div data-aos = "zoom-out">
            <Program image = {education} name = "education" desc= "nutrition for nyabiheke camp"/>
            </div>
            <div data-aos = "fade-up">
            <Program image = {health} name = "family planning" desc= "nutrition for nyabiheke camp"/>
            </div> */}
            </div>
            </div>
          <Who/>
       
           <Footer/>
        </>
    )
}
export default Welcome