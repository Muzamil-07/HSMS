import { Avatar, Card, Divider, ImageList, ImageListItem, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Col, Row } from 'antd'
import React from 'react'
import Formheader from 'src/components/Formheader'
import Iconify from 'src/components/Iconify'
import Label from 'src/components/Label'
import Pageheader from 'src/components/Pageheader'




const itemData=[
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];

const ViewDigitalPage=() => {
  return (
    <>
      <Pageheader
        title='Digital Page'
        subtitle='In this section you can view complete detail of single page'
        title_array={[ 'dashboard', 'digital pages', 'view' ]}
        add_button={false}
      />
      <div style={{ paddingInline: '2rem' }}>
        <Card style={{ padding: '30px 30px' }}>
          <div style={{ paddingInline: '5rem', paddingBlock: '3rem' }}>
            <Row>
              <Col span={12}>
                <Typography variant='h2'>Meezan Bank</Typography>
                <Stack direction='row' alignItems='center' spacing={1}>
                  <Iconify icon='ic:outline-email' width={22} height={22} />
                  <Typography variant='p' noWrap>
                    meezanbank@gmail.com
                  </Typography>
                </Stack>
                <Stack direction='row' alignItems='center' spacing={1}>
                  <Iconify icon='akar-icons:phone' width={22} height={22} />
                  <Typography variant='p' noWrap>
                    +92315-3435998
                  </Typography>
                </Stack>
                <Typography sx={{ marginTop: '1rem' }} variant='h6'>
                  Category
                </Typography>
                <Label color='primary'>Bank</Label>
              </Col>
              <Col span={12}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'right',
                    paddingTop: 3
                  }}
                >
                  <Avatar sx={{ width: 140, height: 140 }}>M</Avatar>
                </Box>
              </Col>
            </Row>
            <Box sx={{ marginTop: '4rem', marginBottom: '4rem' }}>
              <Formheader title='Branch Information' />
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

            <Box sx={{ marginTop: '5rem', marginBottom: '4rem' }}>
              <Formheader title='Image Gallery' />
            </Box>
            <Row>

              {/* <Col span={24}> */}
              <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                {itemData.map( ( item ) => (
                  <ImageListItem key={item.img}>
                    <img
                      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ) )}
              </ImageList>
              {/* </Col> */}

            </Row>

          </div>
        </Card>
      </div>
    </>
  )
}

export default ViewDigitalPage;
