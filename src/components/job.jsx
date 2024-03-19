import React from "react";
import { Button } from "@mui/material";
import { Image } from 'antd';
import 'aos/dist/aos.css';
import AOS from 'aos';
import {Modal} from 'antd'
import { useState } from "react";
import { useEffect } from "react";
import FormJob from "./jobform";
import axios from "axios";

export default function Job(){


  // const [isInput, setIsInput] = useState(false)
  const [IsJob, setIsJob] = useState(false);
  const [jobData,setJobData] = useState(null)

  useEffect(()=>{
    const fetchData = async () =>{
      try {
        const response = await axios.get('https://alight-bn.onrender.com/api/v1/job')
        setJobData(response.data)
      } catch (error) {
        console.log('error',error)
      }
    };
    fetchData([])
  },[])
  console.log(jobData)
  const handleOpen = ()=>{
      setIsJob(true)
  }
  const handleClose = () =>{
      setIsJob(false)
  }
  
  useEffect(()=>{
    AOS.init({duration:1200})
},[])
    return (
        <>
  <Modal open={IsJob} onCancel={handleClose} footer = {null}>
  {
    setIsJob && (
                <FormJob/>
            )
  }

  </Modal>

                   <div className="test-container" >
             {jobData ? (jobData.data.map((jobx)=>(
               
                <div className="test" data-aos='zoom-in-up'>
            <div className="job-image">
            <Image
    className=""
    src={jobx.jobpicture}
  />
                
            </div>
            <div className="test-text">
        <div className="tit">
        <h2 className="title">{jobx.jobSummaryDescription}</h2>
        <h1 className="title">{jobx.jobTitle}</h1>
         {/* <p className="desc">{jobx.jobAllInfo}</p> */}
         {/* <p className="desc">{jobx.jobLocation}</p> */}
         {/* <p className="desc">{jobx.jobCriteria}</p>  */}
         <p className="desc">{jobx.deadLine}</p>
         <p className="desc">{jobx.publisherDate}</p>
        </div>
                
               <Button className="job-btn"  onClick={handleOpen}>APPLY-NOW</Button>
            </div>
          </div>
                
             ))): (
              <p>Loading...</p>
             )}
          

          </div>
        </>
    )
}