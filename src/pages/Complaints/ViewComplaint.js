import { Card, Typography, Stack, Box, Button } from '@mui/material'
import { Col, Row, Drawer, Form, Input } from 'antd'
import React, { useState } from 'react'
import Pageheader from 'src/components/Pageheader'
import Formheader from 'src/components/Formheader'
import Label from 'src/components/Label'
import './../../css/complaint.css'
import Iconify from 'src/components/Iconify'

const ViewComplaint = () => {
  const [form] = Form.useForm()
  const [open, setOpen] = useState(false)
  const onFinish = values => {
    console.log('Success:', values)
  }
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }
  return (
    <>
      <Pageheader
        title='Complaint'
        subtitle='In this section you can view complaint'
        title_array={['dashboard', 'complaint', 'view']}
        add_button={false}
      />
      <div style={{ paddingInline: '2rem' }}>
        <Card style={{ padding: '30px 30px' }}>
          <Row>
            <Col span={12}>
              <Stack direction='row' alignItems='center' spacing={1}>
                <Typography variant='h2'>Complaint#</Typography>
                <Typography
                  variant='h3'
                  style={{ textDecoration: 'underline' }}
                >
                  123
                </Typography>
              </Stack>

              <Typography variant='p'>
                The reply of this complaint will go to the user's gmail inbox.
                You can also <br /> delete this complaint.
              </Typography>
            </Col>
          </Row>
          <Row>
            <Col span={5}>
              <Stack direction='row' alignItems='center' spacing={1}>
                <Label color='secondary'>Low</Label>
                <div style={{ marginInline: 5 }}>
                  <Label color='warning'>Medium</Label>
                </div>
                <Label color='error'>High</Label>
              </Stack>
            </Col>
          </Row>
          <Box sx={{ marginTop: '4rem', marginBottom: '4rem' }}>
            <Formheader title='Complaint Information' />
          </Box>
          <Row>
            <Col span={1}></Col>
            <Col span={4}>
              <Typography style={{ fontWeight: 'bold' }} variant='p'>
                Name:
              </Typography>
            </Col>

            <Col span={13}>
              <Typography>Fasih ur Rehman</Typography>
            </Col>
            <Col span={3}></Col>
          </Row>
          <Row>
            <Col span={1}></Col>
            <Col span={4}>
              <Typography style={{ fontWeight: 'bold' }} variant='p'>
                Phone:
              </Typography>
            </Col>

            <Col span={13}>
              <Typography>+923153212334</Typography>
            </Col>
            <Col span={3}></Col>
          </Row>
          <Row>
            <Col span={1}></Col>
            <Col span={4}>
              <Typography style={{ fontWeight: 'bold' }} variant='p'>
                From:
              </Typography>
            </Col>

            <Col span={13}>
              <Typography>rfasih14@gmail.com</Typography>
            </Col>
            <Col span={3}></Col>
          </Row>
          <br />
          <Row>
            <Col span={1}></Col>
            <Col span={4}>
              <Typography variant='p' style={{ fontWeight: 'bold' }}>
                Subject:
              </Typography>
            </Col>

            <Col span={13}>
              <Typography>Water Issue</Typography>
            </Col>
            <Col span={3}></Col>
          </Row>
          <br />
          <Row>
            <Col span={1}></Col>
            <Col span={4}>
              <Typography style={{ fontWeight: 'bold' }} variant='p'>
                Body/Description:
              </Typography>
            </Col>

            <Col span={13}>
              <Typography>
                This is a water issue complaint. Please look into it.This is a
                water issue complaint. Please look into it.This is a water issue
                complaint. Please look into it. complaint. Please look into it.
                complaint. Please look into it. complaint. Please look into it.
                complaint. Please look into it.
              </Typography>
            </Col>
            <Col span={3}></Col>
          </Row>
          <br />
          <Row>
            <Col span={1}></Col>
            <Col span={4}>
              <Button onClick={() => setOpen(true)} variant='contained'>
                Reply now
              </Button>
              <Button
                style={{ marginLeft: 10, background: 'red ', color: 'white' }}
              >
                Delete
              </Button>
            </Col>
          </Row>
          <div className='reply_drawer'>
            <Drawer
              footer={
                <>
                  <Row>
                    <Col span={2}>
                      <Iconify
                        onClick={() => form.submit()}
                        style={{
                          fontSize: 22,
                          color: '#2065D1',
                          cursor: 'pointer'
                        }}
                        icon='akar-icons:send'
                      />
                    </Col>
                    <Col span={21}></Col>
                    <Col span={1}>
                      <Iconify
                        onClick={() => {
                          form.resetFields()
                          setOpen(false)
                        }}
                        style={{
                          fontSize: 22,
                          color: 'red',
                          cursor: 'pointer'
                        }}
                        icon='ep:delete'
                      />
                    </Col>
                  </Row>
                </>
              }
              title='Replying to the Complaint# 123'
              headerStyle={{
                background: '#2065D1',
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15
              }}
              drawerStyle={{ boxShadow: '5px 5px 20px' }}
              placement='bottom'
              height={550}
              style={{
                width: '40%',
                marginLeft: 'auto',
                marginRight: '2rem'
              }}
              footerStyle={{ background: 'rgb(245,245,245)' }}
              getContainer={false}
              open={open}
              onClose={() => {
                form.resetFields()
                setOpen(false)
              }}
            >
              <Row>
                <Col span={24}>
                  <Form
                    form={form}
                    size='medium'
                    layout='vertical'
                    name='basic'
                    initialValues={{
                      remember: true
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete='off'
                  >
                    <Form.Item
                      name='subject'
                      rules={[
                        {
                          required: true,
                          message: 'Suject cannot be empty!'
                        }
                      ]}
                    >
                      <Input
                        placeholder='Subject'
                        style={{
                          background: 'rgb(249, 250, 251)',
                          borderTop: 'none',
                          borderInline: 'none'
                        }}
                      />
                    </Form.Item>

                    <Form.Item
                      name='body'
                      rules={[
                        {
                          required: true,
                          message: 'Body cannot be empty!'
                        }
                      ]}
                    >
                      <Input.TextArea
                        allowClear
                        placeholder='Body'
                        style={{
                          resize: 'none',
                          background: 'rgb(249, 250, 251)'
                        }}
                        rows={12}
                      />
                    </Form.Item>
                  </Form>
                </Col>
              </Row>
            </Drawer>
          </div>
        </Card>
      </div>
    </>
  )
}

export default ViewComplaint
