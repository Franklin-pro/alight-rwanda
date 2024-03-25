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

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: '',
  });

  const onFinish = async(values) => {
    try {
      const api = "https://alight-bn.onrender.com/api/v1/user";
      const response = await axios.post(api, {
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        password: formData.password,
        confirmpassword: formData.confirmpassword
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      alert(response.data.message)
    } catch (error) {
  

      if (error.response) {
        alert( error.response.data.message);
      }
    }
  };

  const onFormChange = (changedValues, allValues) => {
    setFormData(allValues);
  };

  return (
    <div className='form-containerx'>
      <div className='form'>
        <h1>sign up form</h1>
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
            name="firstname"
            label="FirstName"
            rules={[
              {
                required: true,
                message: 'Please input your first name!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="lastname"
            label="LastName"
          >
            <Input />
          </Form.Item>
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
            name="confirmpassword"
            label="Confirm-Password"
            dependencies={['password']}
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords do not match!'));
                },
              }),
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
              SIGN-UP
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
