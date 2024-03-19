import React from "react";
import ReadMore from "./readmore";
// import org from '../assets/org.jpeg'
function Who(){

  const LongText = "With over two decades of continuous presence in Rwanda, Alight has been playing a critical role in helping displaced peoplerebuild   their lives. Today, Alight Rwanda works in all five refugee camps   their lives. Today, Alight Rwanda works in all five refugee camps"
return (
    <>
        <div className="who-container">
        <h1 className="head">Who We Are</h1>
            <div className="who">
            <div className="image">
              {/* <img src={org} alt="who"/> */}
            </div>
            <h3>We Are Alight</h3>
              <ReadMore text={LongText} maxLength={100}></ReadMore>
      </div>
      <div className="m-v">
        <div className="mission">
            <h4>mission of alight</h4>
            <ol type="I">
        <li>their lives. Today, Alight Rwanda works in all five refugee camps</li>
        <li>their lives. Today, Alight Rwanda works in all five refugee camps</li>
     </ol>
        </div>
        <div className="vision">
        <h4>vision of alight</h4>
     <ol type="I">
        <li>their lives. Today, Alight Rwanda works in all five refugee camps</li>
        <li>their lives. Today, Alight Rwanda works in all five refugee camps</li>
     </ol>
        </div>
      </div>
{/* <div className="form">
<form action="#" method="post">
<div className="textfield">
<div className="input">
        <label>FirstName:</label>
        <input type="text" className="field" name="fname"/>
      </div>
      <div className="input">
        <label>LastName:</label>
        <input type="text" className="field" name="fname"/>
      </div>
      <div className="area">
        <label>Message:</label>
       <textarea type="text"></textarea>
      </div>
</div>
     

      </form>
</div> */}
  
      </div>
    </>
)
}
export default Who



