import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import GridViewIcon from '@mui/icons-material/GridView';
import BookIcon from '@mui/icons-material/Book';
import PersonIcon from '@mui/icons-material/Person';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import SettingsIcon from '@mui/icons-material/Settings';
import TerminalIcon from '@mui/icons-material/Terminal';
import WorkIcon from '@mui/icons-material/Work';
import { Button } from "@mui/material";


export default function Sidebar({OPensidebar}){
 


    return(
        <>
        <aside id="sidebar" className={OPensidebar ? 'sidebar-responsive' :""}>
        <div className="sidebar-title">
        <div className="sidebar-brand">
        <b> <img src="https://media.licdn.com/dms/image/D4D0BAQG2nVRtKzmAvQ/company-logo_200_200/0/1683013988731?e=2147483647&v=beta&t=xBmpo-7nZLp42UIwjUrkfWsBbvc7B3tOdorYbqIB1jA" alt="alight"/>ALIGHT-RWANDA</b>
        </div>
        <span className="icon icon_close">X</span>
        </div>
        <ul className="sidebar-list">
            <li className="side-list-items" onClick={({key})=>{

            }}>
                <a href="./postjob" className="item" >
                    <GridViewIcon className="icon" />DASHBOARD
                </a>
            </li>
            <li className="side-list-items">
                <a href="@" className="item">
                    <PersonIcon className="icon"/>USER
                </a>
            </li>
            <li className="side-list-items">
            <a href='@' className='item'>
                    <BookIcon className="icon"/>BLOGS
                    </a>
            </li>
            <li className="side-list-items">
                <a href="@" className="item">
                    <TerminalIcon className="icon"/>PROGRAMS
                    
                </a>
                
            </li>
            <li className="side-list-items">
                <a href="@" className="item">
                    <BloodtypeIcon className="icon"/>DONATE
                </a>
            </li>
            <li className="side-list-items">
                <a href="@" className="item">
                    <LocalGroceryStoreIcon className="icon"/>WAREHOUSE
                </a>
            </li>
            <li className="side-list-items">
                <a href="@" className="item">
                    <WorkIcon className="icon"/>JOB
                </a>
            </li>
            <li className="side-list-items">
                <a href="@" className="item">
                    <SettingsIcon className="icon"/>SETTINGS
                </a>
            </li>
        </ul>
        <div className="side-btn">
        <Button className="btn">sign out</Button>
        </div>
        
        </aside>
           
        </>
    )
}