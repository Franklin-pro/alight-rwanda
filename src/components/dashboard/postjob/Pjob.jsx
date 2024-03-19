import { Button } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";




export default function PostAdminForm(){




    const[jobData,setjobData] = useState({
        jobTitle :'',
        jobSummaryDescription : '',
        jobAllInfo : '',
        jobpicture :'',
        jobLocation : '',
        jobCriteria :'',
        deadLine : '',
        publisherDate : '',
    });

    const HandleInputLogin = (e) => {
   setjobData({
    ...jobData,
    [e.target.name] : e.target.value
   })
    };

    const HandleLogin =async (e) => {
        e.preventDefault();

        try {
            const apiLogin = "http://localhost:3030/api/v1/job";
            const response =await axios.post (apiLogin,jobData);

            const {token,Role} = response.data;

            localStorage.setItem =('auth-token',token);
            if(Role === 'user'){
                alert('u are a user')
            }else if(Role === 'admin'){
                alert('u are an admin')
            }
            console.log('jobPosted succeccful',response.data)
        } catch (error) {
           alert( error.response.data.message);

        }
    }


    return(
        
        <>
              <div className="login-container">
           
            <div className="form">
            <h1>PostAdmin Form</h1>
            <form onSubmit={HandleLogin}>
                <div className="fld">
                <label htmlFor="jobTitle">jobTitle:</label>
                    <input type="text" name="jobTitle" value={jobData.Email} onChange={HandleInputLogin} placeholder="enter jobTitle"/>
                </div>
                <div className="fld">
                <label htmlFor="jobSummaryDescription">jobSummaryDescription:</label>
                    <input type="text" name="jobSummaryDescription" value={jobData.jobSummaryDescription} onChange={HandleInputLogin}  placeholder="enter jobSummaryDescription"/>
                </div>
                <div className="fld">
                <label htmlFor="jobAllInfo">jobAllInfo:</label>
                    <input type="text" name="jobAllInfo" value={jobData.jobAllInfo} onChange={HandleInputLogin}  placeholder="enter jobAllInfo"/>
                </div>
                <div className="fld">
                <label htmlFor="jobpicture">jobpicture:</label>
                    <input type="text" name="jobpicture" value={jobData.jobpicture} onChange={HandleInputLogin}  placeholder="enter jobpicture"/>
                </div>
                <div className="fld">
                <label htmlFor=" jobLocation">jobLocation:</label>
                    <input type="text" name=" jobLocation" value={jobData.jobLocation} onChange={HandleInputLogin}  placeholder="enter jobLocation"/>
                </div>
                <div className="fld">
                <label htmlFor="jobCriteria">jobCriteria:</label>
                    <input type="text" name="jobCriteria" value={jobData.jobCriteria} onChange={HandleInputLogin}  placeholder="enter jobCriteria"/>
                </div>
                <div className="fld">
                <label htmlFor="deadLine">deadLine:</label>
                    <input type="text" name="deadLine" value={jobData.deadLine} onChange={HandleInputLogin}  placeholder="enter deadLine"/>
                </div>
                <div className="fld">
                <label htmlFor="publisherDate">publisherDate:</label>
                    <input type="text" name="publisherDate" value={jobData.publisherDate} onChange={HandleInputLogin}  placeholder="enter publisherDate"/>
                </div>
               
                <div className="log">
              <Button className="log-btn" type="submit">POST-JOB</Button>
                </div>
                </form>
            </div>
                
            </div>
        </>
    )
}