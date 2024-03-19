import { Button } from "@mui/material";
import React from "react";
import FormJob from "./jobform";
import { useState } from "react";
import { Modal } from "antd";


export default function GetOneJob(){

   const[IsJob,setIsJob] = useState(false);

   const HandleJob = () =>{
      setIsJob(true)
   }
   const handleClose = () =>{
      setIsJob(false)
   }
    return (
        <>
       
         <Modal open = {IsJob} onCancel={handleClose} footer = {null}>
         {
         IsJob &&
         <FormJob/>
         }
         </Modal>
       
       
        
            <div className="get-one-container">
                <div className="get-one">
                <h1>JOB ADVERT- ACOUNTANT POSITION</h1>
                    <div className="adv-job">
                    <ul>
                       <li>Job Title: Accountant (02)</li>
                       </ul>
                    </div>
                    <div className="adv-job">
                    <ul>
                    <li>Job Title: Accountant (02)</li>
                       </ul>
                    </div>
                    <div className="adv-job">
                    <ul>
                    <li>Job Title: Accountant (02)</li>
                       </ul>
                    </div>
                    <div className="adv-job">
                    <ul>
                    <li>Job Title: Accountant (02)</li>
                       </ul>
                    </div>
                    <div className="adv-job">
                    <ul>
                    <li>Job Title: Accountant (02)</li>
                       </ul>
                    </div>
                </div>
                <div className="get-one">
                <h1>SUMMARY OF JOB APPLICATION</h1>
                    <div className="adv-job">
                       <ul>
                       <li>This advert has been viewed 474 times</li>
                       </ul>
                    </div>
                    <div className="adv-job">
                    <ul>
                       <li>This advert has been viewed 474 times</li>
                       </ul>
                    </div>
                    <div className="adv-job">
                    <ul>
                       <li>This advert has been viewed 474 times</li>
                       </ul>
                    </div>
                    <div className="adv-job">
                    <ul>
                       <li>This advert has been viewed 474 times</li>
                       </ul>
                    </div>
                    <div className="adv-job">
                    <ul>
                       <li>This advert has been viewed 474 times</li>
                       </ul>
                       <div className="job-btn">
                       <Button className="btn" onClick={HandleJob}>UPPLY-JOB</Button>
                       </div>
                      
                    </div>
                    
                </div>
                
            </div>

        </>
    )
}