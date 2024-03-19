import { Button } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {jwtDecode} from 'jwt-decode';



export default function Login(){




    const[loginData,setloginData] = useState({
        Email :'',
        Password : '',
    });
    const [userRole, setUserRole] = useState(null);
    const HandleInputLogin = (e) => {
   setloginData({
    ...loginData,
    [e.target.name] : e.target.value
   })
    };

    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
          const apiLogin = "https://alight-bn.onrender.com/api/v1/user/login";
          const response = await axios.post(apiLogin, loginData);
    
          const { token } = response.data;
    
          localStorage.setItem('auth-token', token);
    
          // Decode the token to get user information, including the role
          const decodedToken = jwtDecode(token);
          setUserRole(decodedToken.role);
    
          console.log('Login successful', response.data);
          if(userRole ==='admin'){
            alert('Welcome, admin!')

          }else{
            alert('Welcome, user!')
          }
        } catch (error) {
          alert(error.response.data.message);
        }
      };
    return (
        <>
            <div className="login-container">
            <h1>Login Form</h1>
            <div className="login">
            <form onSubmit={handleLogin}>
                <div className="fld">
                <label htmlFor="Email">Email:</label>
                    <input type="text" name="Email" value={loginData.Email} onChange={HandleInputLogin} placeholder="enter email"/>
                </div>
                <div className="fld">
                <label htmlFor="Password">Password:</label>
                    <input type="password" name="Password" value={loginData.Password} onChange={HandleInputLogin}  placeholder="enter password"/>
                </div>
                <a href="@">forgot password</a>
                <div className="log">
              <Button className="log-btn" type="submit">Login</Button>
                </div>
                </form>
                <p>if you don't have account?<Link to={'/signup'}>signUp</Link></p>
            </div>
                
            </div>
        </>
    )
}