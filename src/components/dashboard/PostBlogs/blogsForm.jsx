import { Button } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";




export default function Post(){

    const[blogData,setBlogData] = useState({
        BlogTitle :'',
        BlogSummary : '',
        BlogDiscription : '',
        BlogImage : [],
        PostedDate : '',

    });

    const HandleInputLogin = (e) => {
   setBlogData({
    ...blogData,
    [e.target.name] : e.target.value
   })
    };

    const HandleLogin =async (e) => {
        e.preventDefault();

        try {
            const apiBlogs = "http://localhost:3030/api/v1/blog";
            const response =await axios.post (apiBlogs,blogData);

            const {token,Role} = response.data;

            localStorage.setItem =('auth-token',token);
            if(Role === 'user'){
                alert('u are a user')
            }else if(Role === 'admin'){
                alert('u are an admin')
            }
            console.log('Blogs posted succeccful',response.data)
        } catch (error) {
           alert( error.response.data.message);

        }
    }

    return (
        <>
       
            <div className="login-container">
            <h1>Login Form</h1>
            <div className="login">
            <form onSubmit={HandleLogin}>
                <div className="fld">
                <label htmlFor="BlogTitle">BlogTitle:</label>
                    <input type="text" name="BlogTitle" value={blogData.BlogTitle} onChange={HandleInputLogin} placeholder="enter BlogTitle"/>
                </div>
                <div className="fld">
                <label htmlFor="BlogSummary">BlogSummary:</label>
                    <input type="text" name="BlogSummary" value={blogData.BlogSummary} onChange={HandleInputLogin}  placeholder="enter BlogSummary"/>
                </div>
                <div className="fld">
                <label htmlFor="BlogDiscription">BlogDiscription:</label>
                    <input type="text" name="BlogDiscription" value={blogData.BlogDiscription} onChange={HandleInputLogin}  placeholder="enter BlogDiscription"/>
                </div>
                <div className="fld">
                <label htmlFor="BlogImage">BlogImage:</label>
                    <input type="text" name="BlogImage" value={blogData.BlogImage} onChange={HandleInputLogin}  placeholder="enter BlogImage"/>
                </div>
                
                <div className="log">
              <Button className="log-btn" type="submit">Post-Blogs</Button>
                </div>
                </form>
            </div>
                
            </div>
        </>
    )
}