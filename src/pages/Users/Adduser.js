/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react'
import Pageheader from 'src/components/Pageheader'
import {
  Form,
  Input,
  Steps,
  Select,
  DatePicker,
  Row,
  Col,
  InputNumber,
  Alert,
  Cascader
} from 'antd'
import { Button, Grid } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

import './../../css/users.css'
const { Step } = Steps
const { Option } = Select

const Form_one = () => {
  const [form] = Form.useForm()
  const onFinish = values => {
    console.log('Received values of form: ', values)
  }

  return (
    <>
      <Form
        form={form}
        labelCol={{
          span: 8
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
        <Row>
          <Col span={12}>
            <Form.Item
              name='username'
              label='Username'
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                  whitespace: true
                }
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name='email'
              label='E-mail'
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!'
                },
                {
                  required: true,
                  message: 'Please input your E-mail!'
                }
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item
              name='password'
              label='Password'
              rules={[
                {
                  required: true,
                  message: 'Please input your password!'
                }
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name='confirm'
              label='Confirm Password'
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!'
                },
                ({ getFieldValue }) => ({
                  validator (_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve()
                    }
                    return Promise.reject(
                      new Error(
                        'The two passwords that you entered do not match!'
                      )
                    )
                  }
                })
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <Form.Item
              name='phone'
              label='Phone Number'
              rules={[
                {
                  required: true,
                  message: 'Please input your phone number!'
                }
              ]}
            >
              <Input
                addonBefore={<span>+92</span>}
                style={{
                  width: '100%'
                }}
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              name='dob'
              label='Date of Birth'
              rules={[
                {
                  required: true,
                  message: 'Please select your date of birth!'
                }
              ]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              name='gender'
              label='Gender'
              rules={[
                {
                  required: true,
                  message: 'Please select gender!'
                }
              ]}
            >
              <Select placeholder='Select your gender'>
                <Option value='male'>Male</Option>
                <Option value='female'>Female</Option>
                <Option value='other'>Other</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              style={{ width: '92%' }}
              name='martialstatus'
              label='Martial Status'
              rules={[
                {
                  required: true,
                  message: 'Please select your martial status!'
                }
              ]}
            >
              <Select placeholder='Select your Martial Status'>
                <Option value='single'>Single</Option>
                <Option value='married'>Married</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item
              style={{ width: '105%' }}
              name='address1'
              label='Address No. 1'
              rules={[
                {
                  required: true,
                  message: 'Please input your Address No. 1'
                }
              ]}
            >
              <Input.TextArea rows={2} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item
              style={{ width: '105%' }}
              name='address2'
              label='Address No. 2'
              rules={[
                {
                  required: true,
                  message: 'Please input your Address No. 2'
                }
              ]}
            >
              <Input.TextArea rows={2} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Form.Item
              name='country'
              label='Country'
              rules={[
                {
                  required: true,
                  message: 'Please input your Country'
                }
              ]}
            >
              <Select
                showSearch
                placeholder='Select a country'
                optionFilterProp='children'
                filterOption={(input, option) =>
                  option.children.toLowerCase().includes(input.toLowerCase())
                }
              >
                <Option value='Pakistan'>Pakistan</Option>
                <Option value='India'>India</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name='city'
              label='City'
              rules={[
                {
                  required: true,
                  message: 'Please input your City'
                }
              ]}
            >
              <Select
                showSearch
                placeholder='Select a city'
                optionFilterProp='children'
                filterOption={(input, option) =>
                  option.children.toLowerCase().includes(input.toLowerCase())
                }
              >
                <Option value='Lahore'>Lahore</Option>
                <Option value='Karachi'>Karachi</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name='zipcode'
              label='Zip Code'
              rules={[
                {
                  required: true,
                  message: 'Please input your Zip code'
                }
              ]}
            >
              <InputNumber style={{ width: '97.5%' }} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  )
}
const Form_two = () => {
  const onFinish_two = values => {
    console.log('Success:', values)
  }
  const onFinishFailed_two = errorInfo => {
    console.log('Failed:', errorInfo)
  }
  return (
    <>
      <Form
        name='formtwo'
        layout='vertical'
        labelCol={{
          span: 8
        }}
        wrapperCol={{
          span: 22
        }}
        initialValues={{
          remember: true
        }}
        onFinish={onFinish_two}
        onFinishFailed={onFinishFailed_two}
        autoComplete='off'
      >
        <Row>
          <Col span={12}>
            <Form.Item
              label='Your CNIC'
              name='cnic'
              rules={[
                {
                  required: true,
                  message: 'Please input your cnic no.!'
                }
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Father's Name"
              name='profession'
              rules={[
                {
                  required: true,
                  message: "Please input your father's name!"
                }
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <Form.Item
              name='mobileno1'
              label='Mobile Number 1'
              rules={[
                {
                  required: true,
                  message: 'Please input your mobile number 1!'
                }
              ]}
            >
              <Input
                addonBefore={<span>+92</span>}
                style={{
                  width: '100%'
                }}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name='mobileno2'
              label='Mobile Number 2'
              rules={[
                {
                  required: true,
                  message: 'Please input your mobile number 2!'
                }
              ]}
            >
              <Input
                addonBefore={<span>+92</span>}
                style={{
                  width: '100%'
                }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Form.Item
              label='Religion'
              name='religion'
              rules={[
                {
                  required: true,
                  message: 'Please input your religion!'
                }
              ]}
            >
              <Select
                showSearch
                placeholder='Select a religion'
                optionFilterProp='children'
                filterOption={(input, option) =>
                  option.children.toLowerCase().includes(input.toLowerCase())
                }
              >
                <Option value='Islam'>Islam</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label='Profession'
              name='profession'
              rules={[
                {
                  required: true,
                  message: 'Please input your profession!'
                }
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              style={{ width: '96%' }}
              label='Monthly Income'
              name='income'
              rules={[
                {
                  required: true,
                  message: 'Please input your monthly income!'
                }
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  )
}
const Form_three = () => {
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou'
        }
      ]
    },
    {
      value: 'city',
      label: 'city',
      children: [
        {
          value: 'lahore',
          label: 'lahore'
        }
      ]
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'ok',
          label: 'ok'
        },
        {
          value: 'hi',
          label: 'hi'
        },
        {
          value: 'no',
          label: 'no'
        }
      ]
    }
  ]
  const onFinish_three = values => {
    console.log('Success:', values)
  }
  const onFinishFailed_three = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  const onChange = (value, selectedOptions) => {
    console.log(value, selectedOptions)
  }
  const filter = (inputValue, path) =>
    path.some(
      option =>
        option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    )
  const displayRender = labels => {
    return labels[labels.length - 1]
  }

  return (
    <>
      <Form
        name='formtwo'
        layout='vertical'
        labelCol={{
          span: 16
        }}
        wrapperCol={{
          span: 22
        }}
        initialValues={{
          remember: true
        }}
        size='large'
        onFinish={onFinish_three}
        onFinishFailed={onFinishFailed_three}
        autoComplete='off'
      >
        <Row>
          <Col span={12}>
            <Form.Item
              label='Select the plot from the dropdown, you want to assign to this user'
              name='plot'
              rules={[
                {
                  required: true,
                  message: 'Please input plot!'
                }
              ]}
            >
              <Cascader
                dropdownMenuColumnStyle={{ width: '25rem' }}
                size='large'
                options={options}
                onChange={onChange}
                placeholder='Please select a plot'
                displayRender={displayRender}
                showSearch={{
                  filter
                }}
                onSearch={value => console.log(value)}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  )
}

const Adduser = () => {
  const [current, setCurrent] = useState(0)
  const next = () => {
    setCurrent(current + 1)
  }
  const prev = () => {
    setCurrent(current - 1)
  }
  const steps = [
    {
      title: 'Personal Information',
      content: (
        <div>
          <Form_one />
        </div>
      )
    },
    {
      title: 'Additional Information',
      content: (
        <div>
          <Form_two />
        </div>
      )
    },
    {
      title: 'Plot Information',
      content: (
        <div>
          <Form_three />
        </div>
      )
    }
  ]
  return (
    <div className='add_new_user_parent'>
      <Pageheader
        title='Add New User'
        subtitle='In this section you can add new user'
        title_array={['dashboard', 'users', 'addnewuser']}
        add_button={false}
        add_button_title='new user'
        add_button_link='/dashboard/users/addnewuser'
      />
      <div style={{ paddingInline: '2rem' }}>
        <Alert
          style={{
            width: '50%',
            height: '10vh',
            background: 'white',
            borderBlock: '1px solid #d9d9d9',
            borderRight: '1px solid #d9d9d9',
            borderLeft: '2px solid #91d5ff'
          }}
          message={
            <>
              <span>Want to assign plot to an existing user</span>
              <Button
                style={{ border: 'none', textDecoration: 'underline' }}
                component={RouterLink}
                to='/dashboard/users'
              >
                Click here
              </Button>
            </>
          }
          closable
          type='info'
          showIcon
        />
        <div style={{ marginBlock: '3rem' }}>
          <Steps current={current}>
            {steps.map(item => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
        </div>
        <div>{steps[current].content}</div>
        <Grid container justifyContent='flex-end'>
          {current > 0 && (
            <Button variant='contained' onClick={prev}>
              Previous
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button variant='contained' style={{ marginLeft: 7 }}>
              Done
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button
              variant='contained'
              style={{ marginLeft: 7 }}
              onClick={() => next()}
            >
              Next
            </Button>
          )}
        </Grid>
      </div>
    </div>
  )
}

export default Adduser
