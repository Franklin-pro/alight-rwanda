import React from "react";
import { Button } from "antd";

export default function Program(){
   return(
    <>
   <div className="program-container">
           <h1>Jobs</h1>
            <div className="program-controller">
                <div className="post-form">
                <div className="forms">
                <h2>Program-form</h2>
                <div className="form">
                    <label>Program-Title</label>
                    <input type="text" name="title" placeholder="Blog-title" className="input"/>
                </div>
                <div className="form">
                    <label>Program-SummaryDescription</label>
                    <input type="text" name="summary" placeholder="Blog-Summary" className="input"/>
                </div>
                <div className="form">
                <label>Program-information</label>
                    <input type="text" name="title" placeholder="Blog-Description" className="input"/>
                </div>
                <div className="form">
                <label>Program-picture</label>
                    <input type="file" name="title" placeholder="Blog-Description" className="input"/>
                </div>
               
                <div className="post-btn">
                  
                    <Button className="btn">POST-PROGRAM</Button>
                </div>
                </div>
          
                </div>
                <div className="post-table">
                <div className="table-container">
            <h1>program table</h1>
            <div className="tables">
            <table border={1}>
                <tr>
                    <th>Program-image</th>
                    <th>Program-Name</th>
                    <th>program-Title</th>
                    <th>program-SummaryDescription</th>
                    <th>program-Information</th>
                 
                 
                    <th colSpan={2}>OPTION</th>
                </tr>
                <tr>
                    <td>computer/laptop</td>
                    <td>computer/laptop</td>
                    <td>computer/laptop</td>
                    <td>computer/laptop</td>
                    <td>computer/laptop</td>
                 
                    
                    <td className="opt"><Button className="del">DELETE</Button></td>
                    <td className="opts"><Button className="del">UPDATE</Button></td>
                </tr>
                <tr>
                
                    <td>computer/laptop</td>
                    <td>computer/laptop</td>
                    <td>computer/laptop</td>
                    <td>computer/laptop</td>
                    <td>computer/laptop</td>
                 
                    
                    <td className="opt"><Button className="del">DELETE</Button></td>
                    <td className="opts"><Button className="del">UPDATE</Button></td>
                </tr>
                <tr>
               
                    <td>computer/laptop</td>
                    <td>computer/laptop</td>
                    <td>computer/laptop</td>
                    <td>computer/laptop</td>
                    <td>computer/laptop</td>
                  
                  
                    <td className="opt"><Button className="del">DELETE</Button></td>
                    <td className="opts"><Button className="del">UPDATE</Button></td>
                </tr>
                </table>
            </div>
                
            </div>
                    </div>
            </div>
           </div>
</>
   )
}