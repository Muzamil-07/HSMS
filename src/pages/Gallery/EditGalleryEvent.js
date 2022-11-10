import React, { useState } from 'react'
import Page from '../../components/Page'
import Pageheader from 'src/components/Pageheader'
import {
  Form,
  Input,
  Row,
  Col,
  Upload,
} from 'antd';
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button';
import ImgCrop from 'antd-img-crop';
import Iconify from 'src/components/Iconify'

const AddUpload = styled(Upload)`
.ant-upload.ant-upload-select-picture-card, .ant-upload-list-picture-card-container{
  width: 200px;
  height: 200px;
}
`;

const EditGalleryEvent=() => {

  const [ galleryImage, setGalleryImage ]=useState( [] );

  
  const onFinish=( values ) => {
    console.log( 'Received values of form:', values,galleryImage );
  };  
  
  const onGalleryImageChange=( { fileList: newFileList } ) => {
    setGalleryImage( newFileList );
  };
  
  const cropRatio = 1/1;

  return (
    <Page title='Dashboard: Gallery Page'>
      <Pageheader
        title='Edit gallery page'
        subtitle='In this section you will edit event gallery'
        title_array={[ 'dashboard', 'content', 'gallery','add' ]}
      />
      <div style={{ paddingLeft: '2rem'}}>
        <Form
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
          <Row >
          <Col span={12} >
              <Form.Item
                name='name'
                label='Name'
                rules={[
                  {
                    required: true,
                    message: 'Please input name for your digital page!',
                    whitespace: true
                  }
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            </Row > 
            <Row >
            <Col span={24}>
              <ImgCrop rotate aspect={cropRatio}>
                <AddUpload
                  listType="picture-card"
                  fileList={galleryImage}
                  onChange={onGalleryImageChange}
                  beforeUpload={() => false}
                >
                  <Iconify icon="clarity:mobile-solid" width={50} height={50}/>
                </AddUpload>
              </ImgCrop>
            </Col> 
          </Row>


          <Row  style={{marginTop:50}}>
          <Col span={2}>
          <Form.Item>
            <Button variant="contained" color="primary" type='submit'>
              Submit
            </Button>
          </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>

    </Page>
  )
}

export default EditGalleryEvent;
