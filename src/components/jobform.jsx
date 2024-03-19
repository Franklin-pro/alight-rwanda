import { Button } from "@mui/material";
import React from "react";


export default function FormJob(){


    return (
        <>
            <div className="form-container">
            <h1>APPLICATION FORM</h1>
                <div className="forms">
                    <form action="#" method="post">
                    <div className="job-fild">
                        <label htmlFor="fname">FirstName:</label>
                        <input type="text" name="fname" placeholder="FirstName"/>
                        <label htmlFor="lname">LastName:</label>
                        <input type="text" name="lname" placeholder="LastName"/>
                    </div>
                    <div className="job-fild">
                    <label htmlFor="email">Email:</label>
                        <input type="email" name="email" placeholder="Email"/>
                        <label htmlFor="phone">PhoneNumber:</label>
                        <input type="number" name="phone" placeholder="PhoneNumber"/>
                    </div>
                    <div className="job-fild">
                        <label htmlFor="id">National-ID:</label>
                        <input type="number" name="id" placeholder="National-ID"/>
                        <label>COUNTRY</label>
                   <select>
                    <option>COUNTRY</option>
                   </select>
                    </div>
                    <div className="job-fild">
                        <label htmlFor="local">Location:</label>
                        <input type="text" name="local" placeholder="type province and country"/>
                    </div>

                    <div className="job-fild">
                    <label htmlFor="educ">Education:</label>
                        <input type="text" name="educ" placeholder="Education"/>
                        <label htmlFor="phone">Sex:</label>
                        <input type="number" name="phone" placeholder="sex"/>
                    </div>

                    <div className="job-fild">
                        <input type="file" name="phone" placeholder="PhoneNumber"/>
                    </div>

                    <div className="job">
              <Button className="job-btn">UPPLY-NOW</Button>
                </div>
                    </form>
                </div>
            </div>
        </>
    )
}