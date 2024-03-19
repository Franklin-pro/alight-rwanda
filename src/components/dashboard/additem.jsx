import * as React from 'react';
import { Button } from 'antd';
import { useState } from 'react';
import axios from 'axios';

export default function AddItems() {
  const[itemsData,setItemsData] = useState({
    ProductName :'',
    ProductPrice : '',
    Qauntity : '',
    ProductExpires : '',
    PostDate : '',

});

const HandleInputItems = (e) => {
setItemsData({
...itemsData,
[e.target.name] : e.target.value
})
};

const HandleItems =async (e) => {
    e.preventDefault();

    try {
        const apiItems = "http://localhost:3030/api/v1/blog";
        const response =await axios.post (apiItems,itemsData);

        const {token,Role} = response.data;

        localStorage.setItem =('auth-token',token);
        if(Role === 'user'){
            alert('u are a user')
        }else if(Role === 'admin'){
            alert('u are an admin')
        }
        console.log('items posted succeccful',response.data)
    } catch (error) {
       alert( error.response.data.message);

    }
}
  return (
    <div className="login-container">
    <h1>Login Form</h1>
    <div className="login">
    <form onSubmit={HandleItems}>
        <div className="fld">
        <label htmlFor="BlogTitle">ProductName:</label>
            <input type="text" name="BlogTitle" value={itemsData.BlogTitle} onChange={HandleInputItems} placeholder="xxx"/>
        </div>
        <div className="fld">
        <label htmlFor="ProductPrice">ProductPrice:</label>
            <input type="text" name="ProductPrice" value={itemsData.ProductPrice} onChange={HandleInputItems} placeholder="xxx"/>
        </div>
        <div className="fld">
        <label htmlFor="Qauntity">Qauntity:</label>
            <input type="text" name="Qauntity" value={itemsData.Qauntity} onChange={HandleInputItems} placeholder="xxx"/>
        </div>
        <div className="fld">
        <label htmlFor="ProductExpires">ProductExpires:</label>
            <input type="text" name="ProductExpires" value={itemsData.ProductExpires} onChange={HandleInputItems} placeholder="xxx"/>
        </div>
        
        <div className="log">
      <Button className="log-btn" type="submit">Post-Items</Button>
        </div>
        </form>
    </div>
        
    </div>
   
  );
}