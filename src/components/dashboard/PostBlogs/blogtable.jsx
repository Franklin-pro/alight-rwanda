import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import DeleteIcon from '@mui/icons-material/Delete';
import Post from './blogsForm';
import { Button } from 'antd';
import { Modal } from 'antd';
// import ReadMore from '../../readmore';


export default function WareHouseTable() {
  const [IsItem, setIsItems] = useState(false);
  const [records, setRecords] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3030/api/v1/blog');
        setRecords(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error or setRecords([]) based on your requirement
       
        setRecords([])
      }
    };

    fetchData([]);
  }, []);

  const handleOpen = () => {
    setIsItems(true);
  }

  const handleClose = () => {
    setIsItems(false);
  }
// console.log(records)
  return (
    <>
    
      <Modal open={IsItem} onCancel={handleClose} footer={null}>
        {IsItem && (
          <Post />
        )}
      </Modal>

      <div className='demo'>
        <h1>BLOGS-TABLE</h1>
      
        <TableContainer component={Paper}>
        <Button onClick={ handleOpen } className='add'>ADD-ITEMS</Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><b className='th'>BlogTitle</b></TableCell>
            <TableCell><b className='th'>Blog Summary</b></TableCell>
            <TableCell><b className='th'>Blog Description</b></TableCell>
            <TableCell><b className='th'>Blog Image</b></TableCell>
            <TableCell><b className='th'>PostedDate</b></TableCell>
            <TableCell align="center" colSpan={2}><b className='th'>OPTIONS</b></TableCell>
            {/* Add more table headers based on your data */}
          </TableRow>
        </TableHead>
        <TableBody>
        {
          records ? (records.data.map((blog)=>(
            <TableRow key={blog._id}>
                <TableCell><b className='td'>{blog.BlogTitle}</b></TableCell>
                <TableCell><b className='td'>{blog.BlogSummary}</b></TableCell>
                <TableCell><b className='td'>{blog.BlogDiscription}</b></TableCell>
                <TableCell><b className='td'>{blog.BlogImage}</b></TableCell>
                <TableCell><b className='td'>{blog.PostedDate}</b></TableCell>
                <TableCell align="right"><Button className='btn-up'><BrowserUpdatedIcon/></Button></TableCell>
              <TableCell align="right"><Button className='btn-del'><DeleteIcon/></Button></TableCell>
              </TableRow>
          ))):(
            <p>Loading</p>
          )
        }

        {/* {
          records.data.map((blog)=>(
            <TableRow key={blog._id}>
                <TableCell>{blog.BlogTitle}</TableCell>
               
              </TableRow>
          ))
        } */}
         
        </TableBody>
      </Table>
    </TableContainer>
    
      </div>
    </>
  );
}

      