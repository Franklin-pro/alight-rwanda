import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from 'antd';
import {Modal} from 'antd'
import { useState } from 'react';
import PostAdminForm from './Pjob';



function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('computer', 300, 69, 24, 40),
  createData('sugar', 200, 90, 37, 43),
  createData('scanner', 262, 16.0, 24, 6.0),
];

export default function JobTable() {
  const [IsItem, setIsItems] = useState(false);
  
  const handleOpen = ()=>{
      setIsItems(true)
  }
  const handleClose = () =>{
      setIsItems(false)
  }
  return (
    
    <>
       <Modal open={IsItem} onCancel={handleClose} footer = {null}>
  {
    setIsItems && (
              <PostAdminForm/>
            )
  }

  </Modal>
    <div className='dem'>
    <h1>JOB-TABLE</h1>
 <TableContainer component={Paper}>
 <Button className='add' onClick={handleOpen}>ADD-JOBS</Button>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>WareHouse all items</caption>
        <TableHead>
       
          <TableRow>
          <TableCell><b className='th'>Job-Image</b></TableCell>
            <TableCell align="right"><b className='th'>Job-Title</b></TableCell>
            <TableCell align="right"><b className='th'>Job-Summary</b></TableCell>
            <TableCell align="right"><b className='th'>Job-Description</b></TableCell>
            <TableCell align="center" colSpan={2}><b className='th'>OPTIONS</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
               <b className='td'> {row.name}</b>
              </TableCell>
              <TableCell align="right"><b className='td'>{row.calories}</b></TableCell>
              <TableCell align="right"><b className='td'>{row.fat}</b></TableCell>
            
              <TableCell align="right"><b className='btn-up'><BrowserUpdatedIcon/></b></TableCell>
              <TableCell align="right"><b className='btn-del'><DeleteIcon/></b></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
    </>
   
  );
}
      