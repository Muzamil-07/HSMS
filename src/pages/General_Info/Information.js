import React from 'react'
import { Stack, Typography } from '@mui/material'
import Page from '../../components/Page'
import Pageheader from 'src/components/Pageheader'
import Formheader from 'src/components/Formheader'
import {
  Form,
  Input,
  Select,
  Row,
  Col,
  Upload,
  Alert,
} from 'antd'
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom'
const { TextArea }=Input;





const Information=() => {

  const onFinishAbout=( values ) => {
    console.log( values );
  }

  return (
    <Page title='Dashboard: General Information'>
      <Pageheader
        title='General Information'
        subtitle='In this section you can find General Information'
        title_array={[ 'dashboard', 'content', 'general info' ]}
      />
      <div style={{ paddingInline: '2rem' }}>

        <div style={{ marginTop: '2rem' }}>
          <Formheader title='About' />
          <Form
            labelCol={{
              span: 14
            }}
            wrapperCol={{
              span: 22
            }}
            layout='vertical'
            name='register'
            onFinish={onFinishAbout}
            initialValues={{
              prefix: '92'
            }}
            style={{ marginTop: '2rem' }}
            scrollToFirstError
          >
            <Col span={16}>
              <Form.Item
                name='block'
                label='Enter information about HSMS'
                rules={[
                  {
                    required: true,
                    message: 'Please enter about your HSMS'
                  }
                ]}
              >
                <TextArea
                  placeholder="Autosize height with minimum and maximum number of lines"
                  autoSize={{
                    minRows: 4,
                    maxRows: 8,
                  }}
                />

              </Form.Item>
            </Col>


            <Form.Item>
              <Button variant="contained" color="primary" type='submit'>
                Change
              </Button>
            </Form.Item>
          </Form>

        </div>

        <div style={{ marginTop: '1rem' }}>
          <Formheader title='Privacy Policy' />
          <Form
            labelCol={{
              span: 14
            }}
            wrapperCol={{
              span: 22
            }}
            layout='vertical'
            name='register'
            onFinish={onFinishAbout}
            initialValues={{
              prefix: '92'
            }}
            style={{ marginTop: '2rem' }}
            scrollToFirstError
          >
            <Col span={16}>
              <Form.Item
                name='block'
                label='Enter information about privacy policy'
                rules={[
                  {
                    required: true,
                    message: 'Please enter privacy policy'
                  }
                ]}
              >
                <TextArea
                  placeholder="Autosize height with minimum and maximum number of lines"
                  autoSize={{
                    minRows: 4,
                    maxRows: 8,
                  }}
                />

              </Form.Item>
            </Col>


            <Form.Item>
              <Button variant="contained" color="primary" type='submit'>
                Change
              </Button>
            </Form.Item>
          </Form>

        </div>

        <div style={{ marginTop: '1rem' }}>
          <Formheader title='Contact Information' />
          <Form
            labelCol={{
              span: 14
            }}
            wrapperCol={{
              span: 22
            }}
            layout='vertical'
            name='register'
            onFinish={onFinishAbout}
            initialValues={{
              prefix: '92'
            }}
            style={{ marginTop: '2rem' }}
            scrollToFirstError
          >
            <Col span={10}>
              <Form.Item
                name='Address'
                label='Enter address'
                rules={[
                  {
                    required: true,
                    message: 'Please enter address'
                  }
                ]}
              >
                <Input placeholder='Enter address' />

              </Form.Item>
            </Col>
            <Col span={10}>
              <Form.Item
                name='Phone no'
                label='Enter phone no'
                rules={[
                  {
                    required: true,
                    message: 'Please enter phone no'
                  }
                ]}
              >
                <Input placeholder='Enter phone no' />

              </Form.Item>
            </Col>
            <Col span={10}>
              <Form.Item
                name='Email'
                label='Enter Email'
                rules={[
                  {
                    required: true,
                    message: 'Please enter Email',
                    type: 'email'
                  }
                ]}
              >
                <Input placeholder='Enter Email' />

              </Form.Item>
            </Col>


            <Form.Item>
              <Button variant="contained" color="primary" type='submit'>
                Change
              </Button>
            </Form.Item>
          </Form>

        </div>

      </div>
    </Page>
  )
}

export default Information;