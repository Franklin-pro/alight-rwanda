// import React from "react";
// import { Button } from "antd";
// // import axios from "axios";
// import { useState } from "react";
// import axios from "axios";





// export default function PostAdmin(){

//     const [form,setForm] = useState({
//         jobTitle : '',
//         jobSummaryDescription : '',
//         jobAllInfo : '',
//         jobpicture : '',
//         jobLocation : '',
//         jobCriteria : '',
//         deadLine : '',
//         publisherDate : '',
//     });
  
//     const jobInputChange = (e) =>{
//         setForm ({
//             ...form,
//             [e.target.name] : e.target.value
//         });
//     }
//   const submitForm = async (e) =>{
//     e.preventDefault();

//     try {
//         const api = 'http://localhost:3030/api/v1/job';
//         const data = await axios.post(api,{
//             jobTitle : form.jobTitle,
//             jobSummaryDescription : form.jobSummaryDescription,
//             jobAllInfo : form.jobAllInfo,
//             jobpicture : form.jobpicture,
//             jobLocation : form.jobLocation,
//             jobCriteria : form.jobCriteria,
//             deadLine : form.deadLine,
//             publisherDate : form.publisherDate,
//         });
//         console.log(data.data)
//       } catch (error) {
//         console.error('err',error)
//       }
    
//   }


//     return(
//         <>
//              <div className="post-form">
//                <div className="forms">
//                 <h2>job-form</h2>
//                 <form onSubmit={submitForm}>
               
//                 <div className="form">
//                     <label>JobTitle</label>
//                     <input onChange={jobInputChange} value={form.jobTitle} type="text" name="jobTitle" placeholder="jobTitle" className="input"/>
//                </div>
//                <div className="form">
//                  <label>Job-SummaryDescription</label>
//                     <input onChange={jobInputChange} value={form.jobSummaryDescription} type="text" name="jobSummaryDescription" placeholder="jobSummaryDescription" className="input"/>
//                </div>
//                <div className="form">
//                <label>Job- Information</label>
//                     <input onChange={jobInputChange} value={form.jobAllInfo} type="text" name="jobAllInfo" placeholder="jobAllInfo" className="input"/>
//                </div>
//                <div className="form">
//                 <label>Job-picture</label>
//                     <input onChange={jobInputChange} value={form.jobpicture} type="file" name="jobpicture" placeholder="jobpicture" className="input"/>
//                </div>
//                <div className="form">
//                 <label>Job-location</label>
//                     <input onChange={jobInputChange} value={form.jobLocation} type="text" name="jobLocation" placeholder="jobLocation" className="input"/>
//                 </div>
//                <div className="form">
//                 <label>jobCriteria</label>
//                     <input onChange={jobInputChange} value={form.jobCriteria} type="text" name="jobCriteria" placeholder="jobCriteria" className="input"/>
//                 </div>
//                 <div className="form">
//                 <label>Job-DeadLine</label>
//                      <input onChange={jobInputChange} value={form.deadLine} type="text" name=" deadLine" placeholder=" deadLine" className="input"/>
//                 </div>
//                  <div className="form">
//                 <label>Job-publisherDate</label>
//                      <input onChange={jobInputChange} value={form.publisherDate} type="text" name="publisherDate" placeholder=" publisherDate" className="input"/>
//                 </div>
                
//                 <div className="post-btn">
                  
//                     <Button className="btn">POST-JOB</Button>
//                </div>
//                 </form>
             
//                 </div>
//               </div>
//         </>
//     )
// }