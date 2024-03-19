import React from "react";
import { Image } from "antd";
import { Button } from "@mui/material";
// import ThumbUpIcon from '@mui/icons-material/ThumbUp';
// import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
// import MapsUgcIcon from '@mui/icons-material/MapsUgc';

import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect,useState } from "react";
import axios from "axios";

export default function Blogs(){
    const [isBlog,setIsBlog] = useState(null)
    useEffect(()=>{
       const fetchData = async () =>{
        try {
            const response = await axios.get('https://alight-bn.onrender.com/api/v1/blog')
            setIsBlog(response.data)
        } catch (error) {
            
        }
       }
      fetchData([])
    }, [])
    useEffect(()=>{
        AOS.init({duration:1200})
    },[])
    return (
        <>
          
          <div className="blog-container">
        
            {isBlog ? (isBlog.data.reverse().map((blogx) => (
              <div className="blog" key={isBlog._id}>
              <div className="blog-image" data-aos="zoom-in">
              <Image width = {'100%'} height={'100%'} src= {blogx.BlogImage}/>
             
              </div>
              <div className="blog-content"  data-aos="zoom-out">
              <h3 className="title">{blogx.BlogTitle}</h3>
              <p className='short'>{blogx.BlogSummary}</p>
              <p className='short'>{blogx.BlogDiscription}</p>

              {/* <div className='icons'  data-aos="flip-left">
                            <div className='likes'>
                                <ThumbUpIcon style={{ fontSize: "24px" }} />
                                <p>{blogx.Likes.length}</p>
                            </div>
                            <div className='dislikes'>
                                <ThumbDownOffAltIcon style={{ fontSize: "24px" }} />
                                <p>{blogx.DisLikes.length}</p>
                            </div>
                            <div className='comment'>
                                <MapsUgcIcon style={{ fontSize: "24px" }} />
                                <p>{blogx.Comment.length}</p>
                            </div>
                        </div> */}
                        <div className='blog-btn'>
                            <Button> readmore</Button>
                            <p className='short'>{blogx.PostedDate}</p>
                        </div>
              </div>
                    <div className="decription">

                    </div>
                    </div>
                
          ))): (
            <p>Loading...</p>
          )}
         

          </div>
        </>
    )
}