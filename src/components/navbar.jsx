import React from "react";
import alight from '../assets/alight.jpeg';
import MenuIcon from '@mui/icons-material/Menu';
// import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import { useState } from "react";
import Button from '@mui/material/Button';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Login from "./login";
import {Modal} from 'antd'








function NavBar(){
const[isMobile,setIsMobile]= useState(false);
// const [isInput, setIsInput] = useState(false)
const [IsOpen, setIsOpen] = useState(false);

const handleOpen = ()=>{
    setIsOpen(true)
}
const handleClose = () =>{
    setIsOpen(false)
}
    return(
        
        <>
  <Modal open={IsOpen} onCancel={handleClose} footer = {null}>
  {
    setIsOpen && (
                <Login/>
            )
  }

  </Modal>
            
           
        
       
        <nav>
            <div className="nav-container">
                <div className="navbar">
                    <div className="logo">
                        <img src={alight} alt="al"/>
                    </div>
                    <ul className={isMobile?'openNav':'navlinks'}
                    onClick={()=>setIsMobile(false)}
                    >
                    
                        <li><a href="/" className="link">Home</a></li>
                        <li className="drop">
                        
                        <a href="/" className="link">We are Alight</a>
                        <ul className="dropdown">
                        <li><a href="./about" className="link drops">ABout Us</a></li>
                        <li><a href="./join" className="link drops">Join Us</a></li>
                        <li><a href="./testimonial" className="link drops">Testimonial</a></li>
                        <li><a href="./team" className="link drops">Our Term</a></li>
                        </ul>
                        </li>
                        <li><a href="/" className="link">Donate</a></li>
                        <li><a href="./blog" className="link">Blogs</a></li>
                        <li><a href="./job" className="link">Jobs</a></li>
                        
                       <Button onClick={handleOpen} className="btn" endIcon={<VpnKeyIcon/>}>Sign-In</Button>
     
                    </ul>
            
                    {/* <TroubleshootIcon className="menu" onClick = {()=>alert("search")}/> */}
                    <MenuIcon className="menu" onClick = {()=>setIsMobile(!isMobile)} />
        
                </div>
            </div>
        </nav>
    </>
    )
   
}
export default NavBar