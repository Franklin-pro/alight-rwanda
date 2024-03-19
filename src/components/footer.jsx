import React, { useState } from "react";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import alight from '../assets/alight.jpeg';
import {Link} from 'react-router-dom'
import ReadMore from "./readmore";
import Contact from "./contact";
import { Modal } from "antd";







export default function Footer() {
const [isOpens,setIsOpens] = useState(false)


const handleOpens = () =>{
  setIsOpens(true)
}
const handleClose = () =>{
  setIsOpens(false)
}
const LongText = "Alight’s annual report outlines the organization’s activities throughout the preceding year. It is intended to give refugees, donors, partners, stakeholders, Alight’s annual report outlines the organization’s activities throughout the preceding year. It is intended to give refugees, donors, partners, stakeholders,"
  return (
    <>

    
      <Modal open ={isOpens} onCancel={handleClose} footer={null}>
      {
        setIsOpens &&
        (
          <Contact/>
        )
      }
      
      </Modal>
    
     
    
    
      <footer>
        <div className="footer-container">
        <div className="footer">
          <div className="footer-header">
            <PermPhoneMsgIcon className="icon" />0783446449
            <EmailIcon className="icon" />alightrwanda@gmail.com
            <LocationOnIcon className="icon" />Kigali,Rwanda KN(454 ST)
          </div>
          <div className="footer">
          <div className="footer-text">
          <div className="text">
<h3>About-Us</h3>
            <ReadMore text={LongText} maxLength={100}></ReadMore>
          </div>
          {/* <div className="rsc"> */}
          <div className="resource">
                <h3>Resources</h3>
            <ul>
           
                <Link className="link"><li>Blogs</li> </Link>
                <Link className="link"><li>campany</li></Link>
                <Link className="link"><li>Testimonial</li></Link>
            </ul>
                </div>
                <div className="resource">
                <h3>Campany</h3>
            <ul>
               <Link className="link"> <li>Our-Services</li></Link>
               <Link className="link"><li>Contact-Us</li></Link>
               <Link className="link"><li>Our-Team</li></Link>
            </ul>
                </div>
          </div>
            
        
           
          {/* </div> */}
          </div>
        
          </div>
          <div className="icons">
            <FacebookIcon className="icon"/>
            <InstagramIcon className="icon"/>
            <TwitterIcon className="icon"/>
          </div>
          <div className="contact">
          <Button variant="contained" endIcon={<EmailIcon />} onClick={handleOpens}>
        Contact-Us
      </Button>
      
          </div>
          <p className="copy">&copy;{new Date().getFullYear()}@alightrwanda All right deserved</p>
          <div className="footer-image">
            <img src={alight} alt="la"/>
          </div>
        </div>
        
      </footer>
    </>
  );
}
