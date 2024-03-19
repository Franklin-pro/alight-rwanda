import React from "react";
 import Buttons from "./button";
import { useState } from "react";
// import { useEffect } from "react";
import axios from 'axios';
import { Modal } from "antd";
import Login from "./login";
import {Link} from 'react-router-dom'

export default function SignUp(props) {
    const [IsOPen,setIsOpen] = useState(false);
    const handleOpen = () =>{
        setIsOpen(true)
    }
    const handleClose = ()=>{
        setIsOpen(false)
    }

    const [data, setData] = useState({
      FirstName: '',
      LastName: '',
      UserName: '',
      Email: '',
      Password: '',
      RetypePassword: ''
    });
  
    const Handle= (e) => {
      setData({
        ...data,
        [e.target.name]: e.target.value
      });
    }
  
    const Submit = async (e) => {
      e.preventDefault();
  
      try {
        const api = "http://localhost:3030/api/v1/user";
        const response = await axios.post(api, {
          FirstName: data.FirstName,
          LastName: data.LastName,
          UserName: data.UserName,
          Email: data.Email,
          Password: data.Password,
          RetypePassword: data.RetypePassword
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
        alert(response.data.message)
      } catch (error) {
        console.error('Error:', error);
  
        if (error.response) {
          alert( error.response.data.message);
        }
      }
    }
  

    return(
        <>
         <Modal open={IsOPen} onCancel={handleClose} footer={null}>
    <Login/>
    </Modal>
       
            <div className="sign-container">
            <div className="sign">
            
            <div className="left">
           
            <form onSubmit={Submit}>
            <h1>signUp</h1>
                    <div className="fild">
                        <label>FirstName:</label>
                        <input onChange={Handle} id="FirstName" value={data.FirstName} type="text" name="FirstName" placeholder="FirstName"/>
                    </div>
                    <div className="fild">
                        <label>LastName:</label>
                        <input onChange={Handle} id="LastName" value={data.LastName} type="text" name="LastName" placeholder="LastName"/>
                    </div>
                    <div className="fild">
                        <label>UserName:</label>
                        <input onChange={Handle} id="UserName" value={data.UserName} type="text" name="UserName" placeholder="UserName"/>
                    </div>
                    <div className="fild">
                        <label>Email:</label>
                        <input onChange={Handle} id="Email" value={data.Email} type="email" name="Email" placeholder="Email"/>
                    </div>
                    <div className="fild">
                        <label>Create-PassWord:</label>
                        <input onChange={(e)=>Handle(e)} id="Password" value={data.Password} type="password" name="Password" placeholder="password"/>
                    </div>
                    <div className="fild">
                        <label>Confirm-PassWord:</label>
                        <input onChange={(e)=>Handle(e)} id="RetypePassword" value={data.RetypePassword} type="password" name="RetypePassword" placeholder="password"/>
                    </div>
                    <div className="sign-btn">
                   <Buttons name ='SignUp'/>
                    </div>
                    <p className="al">already you have account? <Link to={'/signup'} onClick={handleOpen}>Login</Link></p>
                
                    </form>
                    
                </div>
                <div className="right">
                <h1>Continue with</h1>
                <Buttons name="SignIn With Google" className="btn" fontsize = '1.4rem' background='#FC4A12'/>
                <Buttons name="SignIn With instagram" className="btn" fontsize = '1.4rem' background='#295AD7'/>
                <Buttons name="SignIn With twitter" className="btn" fontsize = '1.4rem' background='#4DCEEA'/>
                </div>
            </div>
          
            </div>
        </>
    )
}