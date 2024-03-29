import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import axios from 'axios';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const onFinish = async (values) => {
    try {
      const api = "https://alight-bn.onrender.com/api/v1/user/login";
      const response = await axios.post(api, {
        email: formData.email,
        password: formData.password,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data.data.user.role)

     
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('role', response.data.data.user.role);

      alert("Login successful!");

      if (response.data.data.user.role === 'admin') {
        window.location.href='./dashboards'
      } else {
        window.location.href='./alight'
      }

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
  
        console.error('Error during API call:', error);
        alert("network error check your network.");
      }
    }
  };

  const onFormChange = (changedValues, allValues) => {
    setFormData(allValues);
  };

  return (
    <>
      <h1>LOGIN FORM</h1>
      <Form
        {...layout}
        name="nest-messages"
        initialValues={formData}
        onFinish={onFinish}
        onValuesChange={onFormChange}
        style={{
          maxWidth: 600,
        }}
        className='formx'
      >
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              type: 'email',
              message: 'Please input a valid email!',
            },
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            ...layout.wrapperCol,
            offset: 8,
          }}
        >
         
          <Button type="primary" htmlType="submit">
            LOGIN-NOW
          </Button>
        </Form.Item>
       <p>if you don't have account here Please <a href="./signup">SignUp</a></p>
      </Form>
    </>

  );
};

export default Login;
