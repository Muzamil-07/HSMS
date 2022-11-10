import React from 'react'
import Pageheader from 'src/components/Pageheader'
import Formheader from 'src/components/Formheader'
import { Card, Typography, Stack, Button, Box } from '@mui/material'
import { Row, Col, Alert } from 'antd'
import Label from 'src/components/Label'

const ViewNotification = () => {
  return (
    <>
      <Pageheader
        title='Notification'
        subtitle='In this section you can view notification'
        title_array={['dashboard', 'notification', 'view']}
        add_button={false}
      />
      <div style={{ paddingInline: '2rem' }}>
        <Alert
          style={{
            marginBottom: 12,
            width: '100%',
            height: '5vh',
            background: 'white',
            borderBlock: '1px solid #d9d9d9',
            borderRight: '1px solid #d9d9d9',
            borderLeft: '2px solid #91d5ff'
          }}
          message={
            <>
              <span>
                This notification has been broadcasted to all of your users
              </span>
            </>
          }
          closable
          type='info'
          showIcon
        />
        <Card style={{ padding: '30px 30px' }}>
          <Row>
            <Col span={12}>
              <Stack direction='row' alignItems='center' spacing={1}>
                <Typography variant='h2'>Notification#</Typography>
                <Typography
                  variant='h3'
                  style={{ textDecoration: 'underline' }}
                >
                  123
                </Typography>
              </Stack>

              <Typography variant='p'>
                The purpose of this section is to have record of every
                notification <br /> sent to the user.
              </Typography>
            </Col>
          </Row>
          <Box sx={{ marginTop: '4rem', marginBottom: '4rem' }}>
            <Formheader title='Notification Information' />
          </Box>
          <Row>
            <Col span={1}></Col>
            <Col span={4}>
              <Typography style={{ fontWeight: 'bold' }} variant='p'>
                To:
              </Typography>
            </Col>

            <Col span={13}>
              <Typography>rfasih14@gmail.com</Typography>
            </Col>
            <Col span={3}></Col>
          </Row>
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

          <br />
          <Row>
            <Col span={1}></Col>
            <Col span={4}>
              <Typography style={{ fontWeight: 'bold' }} variant='p'>
                Type:
              </Typography>
            </Col>
            <Col span={13}>
              <Label color='error'>Fine</Label>
            </Col>
            <Col span={3}></Col>
          </Row>
          <br />
          <Row>
            <Col span={1}></Col>
            <Col span={4}>
              <Typography variant='p' style={{ fontWeight: 'bold' }}>
                Title:
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
              <Button
                style={{ marginLeft: 10, background: 'red ', color: 'white' }}
              >
                Delete
              </Button>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  )
}

export default ViewNotification
