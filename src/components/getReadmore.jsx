import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import { Button } from "antd";

export default function GetReadmore() {
  return (
    <>
      <div className="read-container">
        <div className="reads">
          <h2>title</h2>
          <div className="read-image"></div>
          <div className="read-text">
            <div className="iconx">
              <span><ThumbUpIcon className="icon"/>100</span>
              <span><ThumbDownOffAltIcon className="icon"/>34</span>
              <span><MapsUgcIcon className="icon"/>45</span>
            </div>
            <p>
              Giving is a very personal experience, so it makes sense that
              people do it in so many different ways. Here you can find more
              information some of the most common ways people choose to support
              Alight and the people we serve. Please use the information below
              as a guide but know that at Alight we remain open to new and
              different ways of giving. If you have any questions or would
              prefer to speak to a real person, simply call us at (612)
              872-7060, or email hellohello@wearealight.org to get whatever
              answers you need.
                <br/><br/>
              Giving is a very personal experience, so it makes sense that
              people do it in so many different ways. Here you can find more
              information some of the most common ways people choose to support
              Alight and the people we serve. Please use the information below
              as a guide but know that at Alight we remain open to new and
              different ways of giving. If you have any questions or would
              prefer to speak to a real person, simply call us at (612)
              872-7060, or email hellohello@wearealight.org to get whatever
              answers you need.
              <br/><br/>
              Giving is a very personal experience, so it makes sense that
              people do it in so many different ways. Here you can find more
              information some of the most common ways people choose to support
              Alight and the people we serve. Please use the information below
              as a guide but know that at Alight we remain open to new and
              different ways of giving. If you have any questions or would
              prefer to speak to a real person, simply call us at (612)
              872-7060, or email hellohello@wearealight.org to get whatever
              answers you need.
            </p>
            
           
          </div>
          <div className="all-comment">
            <div className="comment">
            <h2>All-Comment</h2>
            <div className="comments">
            <h3>Name</h3>
                <p>comment</p>
            </div>
                <input type="text" name="comment" placeholder="type comment" style={{padding:'.7rem'}}/>
                <Button>comment</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
