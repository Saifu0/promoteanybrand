import { Grid } from "@mui/material";
import axios from 'axios';
import { Form, Input, Button } from "antd";
import AsBrand from "../assests/as_brand.jpg";
import React from "react";

function DetailForm({ type }) {
  const formRef = React.createRef();
  function onFinish(values) {
        var data = {
            service_id: 'promoteanybrandinfo',
            template_id: 'template_dlxv6z4',
            user_id: 'user_fJ4qGw2udT2gpvQ28vhYJ',
            template_params: {
              ...values,
              type
            }
        };
        axios.post('https://api.emailjs.com/api/v1.0/email/send', data)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error.message));
        setTimeout(() => {
          formRef.current.resetFields();
        }, 2000);
    }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Grid container alignItems='center' justifyContent="center" spacing={2}>
        <Grid item xs={6} >
          <Form
            name='basic'
            ref={formRef}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
          >
            <Form.Item
              label='Brand Name'
              name='brand'
              rules={[{ required: true, message: "Please enter Brand name!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label='Website/App Link'
              name='url'
              rules={[
                { required: true, message: "Please enter Website/App Link" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label='Contact Person Name'
              name='contact-person-name'
              rules={[
                { required: true, message: "Please enter Contact Person Name" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label='Email'
              name='email'
              rules={[{ required: true, message: "Please enter Email" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label='WhatsApp/Phone'
              name='phone'
              rules={[
                { required: true, message: "Please enter WhatsApp/Phone" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type='primary' htmlType='submit'>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Grid>
        <Grid item xs={6} justifyContent="center">
          <img src={AsBrand} alt='as_brand' style={{ width: "100%" }} />
        </Grid>
      </Grid>
    </div>
  )
}

export default DetailForm;
