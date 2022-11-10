import React, { useState } from 'react'
import Page from 'src/components/Page'
import Pageheader from 'src/components/Pageheader'
import { Checkbox, Col, Form, Input, Radio, Row, Select } from 'antd'
import { Button } from '@mui/material'

const { Option } = Select

const AddNotification = () => {
  const [radio, setRadio] = useState('')
  const onFinish = values => {
    console.log('Success:', values)
  }
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }
  return (
    <>
      <Page title='Dashboard: Notification'>
        <Pageheader
          title='Create New Notification'
          subtitle='In this section you create notifications'
          title_array={['dashboard', 'notification', 'add']}
        />
        <div style={{ paddingInline: '2rem' }}>
          <Form
            labelCol={{
              span: 8
            }}
            wrapperCol={{
              span: 22
            }}
            layout='vertical'
            name='basic'
            initialValues={{
              remember: true
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
          >
            <Row>
              <Col span={6}>
                <Form.Item
                  label='Medium'
                  name='medium'
                  rules={[
                    {
                      required: true,
                      message: 'Please select the medium of notification!'
                    }
                  ]}
                >
                  <Checkbox.Group
                    options={[
                      { label: 'In-app', value: 'inapp' },
                      { label: 'Email/SMS', value: 'emailsms' }
                    ]}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Form.Item
                  label='Title'
                  name='title'
                  rules={[
                    {
                      required: true,
                      message: 'Please input title!'
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
                  label='Description'
                  name='description'
                  rules={[
                    {
                      required: true,
                      message: 'Please input description!'
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
                  label='Type'
                  name='type'
                  rules={[
                    {
                      required: true,
                      message: 'Please input type of notification!'
                    }
                  ]}
                >
                  <Select
                    allowClear
                    placeholder='Select the type of notification'
                  >
                    <Option value='general'>General</Option>
                    <Option value='announcement'>Announcement</Option>
                    <Option value='event'>Event</Option>
                    <Option value='fine'>Fine</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Form.Item
                  label='To'
                  name='to'
                  rules={[
                    {
                      required: true,
                      message: 'Please select the type of notification!'
                    }
                  ]}
                >
                  <Radio.Group
                    onChange={e => {
                      setRadio(e.target.value)
                    }}
                    value={radio}
                  >
                    <Radio value='individual'>Individual</Radio>
                    <Radio value='brodcast'>Brodcast</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
            </Row>
            {radio === 'individual' && (
              <Row>
                <Col span={12}>
                  <Form.Item
                    name='user'
                    rules={[
                      {
                        required: radio === 'individual' && true,
                        message: 'Please select user!'
                      }
                    ]}
                    label='Select user'
                  >
                    <Select
                      allowClear
                      mode='multiple'
                      showSearch
                      placeholder='Select a user by searching through his/her CNIC'
                      optionFilterProp='children'
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                    >
                      <Option value='jack'>31200-1233424-3</Option>
                      <Option value='lucy'>12322-4344327-4</Option>
                      <Option value='tom'>98755-5444345-4</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            )}
            <Form.Item>
              <Button variant='contained' type='submit'>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Page>
    </>
  )
}

export default AddNotification
