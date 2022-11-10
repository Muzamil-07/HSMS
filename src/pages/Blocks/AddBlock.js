import React, { useState } from 'react'
import Page from '../../components/Page'
import Pageheader from 'src/components/Pageheader'
import {
  Form,
  Input,
  Select,
  Row,
  Col,
  Checkbox
} from 'antd'
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom'


export const AddBlock=() => {

  const options=[
    {
      label: 'Residential',
      value: 'residential',
    },
    {
      label: 'Commercial',
      value: 'commercial',
    },
    {
      label: 'Overseas',
      value: 'overseas',
    },
  ];

  const onFinish=( values ) => {
    console.log( 'Received values of form:', values );
  };


  return (
    <Page title='Dashboard: Add Block'>
      <Pageheader
        title='Add Block'
        subtitle='In this section you add block'
        title_array={[ 'dashboard', 'block', 'add' ]}
      />
      <div style={{ paddingLeft: '2rem' }}>

        <Form
          labelCol={{
            span: 14
          }}
          wrapperCol={{
            span: 22
          }}
          layout='vertical'
          name='register'
          onFinish={onFinish}
          initialValues={{
            prefix: '92'
          }}
          scrollToFirstError
        >

          <Col span={8}>
            <Form.Item
              name='name'
              label='Block name'
              rules={[
                {
                  required: true,
                  message: 'Please enter block name'
                }
              ]}
            >
              <Input type='text' placeholder='Enter block name' />

            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name='no_of_plots'
              label='No of Plots'
              rules={[
                {
                  required: true,
                  message: 'Please enter no of plots'
                }
              ]}
            >
              <Input type='number' placeholder='Enter no of plots' />

            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              name='category'
              label='Select Category for your plots'
              rules={[
                {
                  required: true,
                  message: 'Please select plots category'
                }
              ]}
            >

              <Checkbox.Group options={options} defaultValue={[ 'Pear' ]} />
            </Form.Item>
          </Col>

          <Form.Item style={{ marginTop: '2rem' }}>
            <Button variant="contained" color="primary" type='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>

    </Page>
  )
}
