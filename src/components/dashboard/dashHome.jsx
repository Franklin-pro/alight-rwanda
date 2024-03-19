import React from "react";
import { ResponsiveContainer, BarChart, Bar,AreaChart, Area, XAxis, YAxis, CartesianGrid,Tooltip,Legend} from 'recharts';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import EditNotificationsIcon from '@mui/icons-material/EditNotifications';


import Program from "../postPrograms/programsPost";


export default function DashHome(){
    const datas = [
        {
          name: 'jan',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'feb',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'mar',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'april',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'May',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'june',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'july',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
        {
            name: 'aug',
            uv: 3490,
            pv: 4300,
            amt: 2100,
          },
          {
            name: 'sept',
            uv: 2490,
            pv: 4300,
            amt: 2100,
          },
          {
            name: 'oct',
            uv: 3400,
            pv: 4300,
            amt: 2100,
          },
          {
            name: 'nov',
            uv: 3190,
            pv: 400,
            amt: 2100,
          },
          {
            name: 'dec',
            uv: 4190,
            pv: 400,
            amt: 2100,
          },
        
      ];
      
      const data = [
        {
          name: 'Monday',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Tuesday',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Wednesday',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Thursday',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Friday',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Saturday',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Sunday',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
      

    return(
        <>
      
            <main className="main-container">
          
            {/* <Pjob/> */}
            <Program/>
            <div className="main-title">
                <h3>DASHBOARD</h3>
            </div>
            <div className="main-card">
            <div className="card">
            <PeopleAltIcon className="icon"/>
            <div className="card-inner">
                <h3>people signed-In</h3>
            </div>
            <h4>1.7M</h4>
            </div>
          
            <div className="card">
            <ShoppingCartIcon className="icon"/>
            <div className="card-inner">
                <h3>Items order this week</h3>
               
            </div>
            <h4>1000</h4>
            </div>
            <div className="card">
            <LocalAtmIcon className="icon"/>
            <div className="card-inner">
                <h3>Total earning donate</h3>
                
            </div>
            <h4>1.2M</h4>
            </div>
            <div className="card">
            <EditNotificationsIcon className="icon"/>
            <div className="card-inner">
                <h3>New applicant job</h3>
               
            </div>
            <h4>1.2M</h4>
            </div>
           
            </div>
            
            <div className="stati">
            <h2>statistic of this week</h2>
            <h2>statistic of this year</h2>
            </div>
            
            <div className="charts" style={{ width: '100%', height: 300 }}>
            <div className="chart-left">
            <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
            </div>
       
          <div className="chart-right">
          <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={datas}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
          </div>
       
            </div>
           
          

            
            </main>
        </>
    )
}