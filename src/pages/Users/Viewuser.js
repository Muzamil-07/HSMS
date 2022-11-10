import { Avatar, Card, Divider, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Col, Row } from 'antd'
import React from 'react'
import Formheader from 'src/components/Formheader'
import Iconify from 'src/components/Iconify'
import Label from 'src/components/Label'
import Pageheader from 'src/components/Pageheader'

const Viewuser = () => {
  return (
    <>
      <Pageheader
        title='User'
        subtitle='In this section you can view single user'
        title_array={['dashboard', 'users', 'view']}
        add_button={false}
      />
      <div style={{ paddingInline: '2rem' }}>
        <Card style={{ padding: '30px 30px' }}>
          <div style={{ paddingInline: '5rem', paddingBlock: '3rem' }}>
            <Row>
              <Col span={12}>
                <Typography variant='h2'>Fasih ur Rehman</Typography>
                <Stack direction='row' alignItems='center' spacing={1}>
                  <Iconify icon='ic:outline-email' width={22} height={22} />
                  <Typography variant='p' noWrap>
                    rfasih14@gmail.com
                  </Typography>
                </Stack>
                <Stack direction='row' alignItems='center' spacing={1}>
                  <Iconify icon='akar-icons:phone' width={22} height={22} />
                  <Typography variant='p' noWrap>
                    +92315-3435998
                  </Typography>
                </Stack>
                <Typography sx={{ marginTop: '1rem' }} variant='h6'>
                  Summary
                </Typography>
                <Typography variant='p'>S/o Muhammad Riaz</Typography>
                <br />
                <Label color='error'>Inactive</Label>
              </Col>
              <Col span={12}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'right',
                    paddingTop: 3
                  }}
                >
                  <Avatar sx={{ width: 140, height: 140 }}>h</Avatar>
                </Box>
              </Col>
            </Row>
            <Box sx={{ marginTop: '4rem', marginBottom: '4rem' }}>
              <Formheader title='Personal Information' />
            </Box>
            <Row>
              <Col span={1}></Col>
              <Col span={5}>
                <Typography variant='h6'>Addresses</Typography>
              </Col>

              <Col span={13}>
                <Typography>
                  140 Tufail block canal bank scheme lahore, 140 Tufail block
                  canal bank scheme lhr
                </Typography>
              </Col>
              <Col span={3}></Col>
            </Row>
            <Row style={{ marginTop: '2rem' }}>
              <Col span={1}></Col>
              <Col span={5}>
                <Typography variant='h6'>Mobile Numbers</Typography>
              </Col>

              <Col span={13}>
                <Typography>03125435667, 03125435632</Typography>
              </Col>
              <Col span={3}></Col>
            </Row>
            <Row style={{ marginTop: '2rem' }}>
              <Col span={1}></Col>
              <Col span={5}>
                <Typography variant='h6'>CNIC</Typography>
              </Col>

              <Col span={13}>
                <Typography>35233-154445-4</Typography>
              </Col>
              <Col span={3}></Col>
            </Row>
            <Row style={{ marginTop: '2rem', marginBottom: '3rem' }}>
              <Col span={1}></Col>
              <Col span={5}>
                <Typography variant='h6'>City/Country</Typography>
              </Col>

              <Col span={13}>
                <Typography>Lahore/Pakistan</Typography>
              </Col>
              <Col span={3}></Col>
            </Row>
            <Divider />
            <Row style={{ marginTop: '3rem' }}>
              <Col span={1}></Col>
              <Col span={5}>
                <Typography variant='h6'>Date of Birth</Typography>
              </Col>

              <Col span={13}>
                <Typography>October 22, 2022</Typography>
              </Col>
              <Col span={3}></Col>
            </Row>
            <Row style={{ marginTop: '2rem' }}>
              <Col span={1}></Col>
              <Col span={5}>
                <Typography variant='h6'>Age</Typography>
              </Col>

              <Col span={13}>
                <Typography>22 Years</Typography>
              </Col>
              <Col span={3}></Col>
            </Row>
            <Row style={{ marginTop: '2rem' }}>
              <Col span={1}></Col>
              <Col span={5}>
                <Typography variant='h6'>Profession</Typography>
              </Col>

              <Col span={13}>
                <Typography>Developer</Typography>
              </Col>
              <Col span={3}></Col>
            </Row>
            <Row style={{ marginTop: '2rem', marginBottom: '3rem' }}>
              <Col span={1}></Col>
              <Col span={5}>
                <Typography variant='h6'>Religion</Typography>
              </Col>

              <Col span={13}>
                <Typography>Islam</Typography>
              </Col>
              <Col span={3}></Col>
            </Row>
            <Divider />
            <Row style={{ marginTop: '3rem' }}>
              <Col span={1}></Col>
              <Col span={5}>
                <Typography variant='h6'>Martial Status</Typography>
              </Col>

              <Col span={13}>
                <Typography>Single</Typography>
              </Col>
              <Col span={3}></Col>
            </Row>
            <Row style={{ marginTop: '2rem' }}>
              <Col span={1}></Col>
              <Col span={5}>
                <Typography variant='h6'>Gender</Typography>
              </Col>

              <Col span={13}>
                <Typography>Male</Typography>
              </Col>
              <Col span={3}></Col>
            </Row>
            <Row style={{ marginTop: '2rem' }}>
              <Col span={1}></Col>
              <Col span={5}>
                <Typography variant='h6'>Monthly Income</Typography>
              </Col>

              <Col span={13}>
                <Typography>40,000$</Typography>
              </Col>
              <Col span={3}></Col>
            </Row>
            <Box sx={{ marginTop: '5rem', marginBottom: '4rem' }}>
              <Formheader title='Plot Information' />
            </Box>
            <Row>
              <Col span={1}></Col>
              <Col span={5}>
                <Typography variant='h6'>Plot#</Typography>
              </Col>

              <Col span={13}>
                <Typography>32-q</Typography>
              </Col>
              <Col span={3}></Col>
            </Row>
            <Row style={{ marginTop: '2rem' }}>
              <Col span={1}></Col>
              <Col span={5}>
                <Typography variant='h6'>Area</Typography>
              </Col>
              <Col span={13}>
                <Typography>5-marla</Typography>
              </Col>
              <Col span={3}></Col>
            </Row>
            <Row style={{ marginTop: '2rem' }}>
              <Col span={1}></Col>
              <Col span={5}>
                <Typography variant='h6'>Block</Typography>
              </Col>
              <Col span={13}>
                <Typography>Usman Block</Typography>
              </Col>
              <Col span={3}></Col>
            </Row>
            <Row style={{ marginTop: '2rem' }}>
              <Col span={1}></Col>
              <Col span={5}>
                <Typography variant='h6'>Installment Plan</Typography>
              </Col>

              <Col span={13}>
                <Typography>
                  5-years <Label color='success'>Active</Label>
                </Typography>
              </Col>
              <Col span={3}></Col>
            </Row>
          </div>
        </Card>
      </div>
    </>
  )
}

export default Viewuser
