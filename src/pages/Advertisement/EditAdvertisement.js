import React, { useState } from 'react'
import Page from '../../components/Page'
import Pageheader from 'src/components/Pageheader'
import {
  Form,
  Input,
  Row,
  Col,
  Upload,
  Select,
  DatePicker
} from 'antd';
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button';
import ImgCrop from 'antd-img-crop';
import Iconify from 'src/components/Iconify'

const { RangePicker } = DatePicker;
const { Option } = Select;
const AddUpload = styled(Upload)`
.ant-upload.ant-upload-select-picture-card, .ant-upload-list-picture-card-container{
  width: 90%;
  height: 400px;
}
`;

const EditAdvertisement=() => {

  const [ mobileImage, setMobileImage ]=useState( [] );
  const [ WebImage, setWebImage ]=useState( [] );
  const [ active, setActive ]=useState(true);

  
  const onFinish=( values ) => {
    console.log( 'Received values of form:', values,mobileImage,WebImage );
  };  
  
  const handleActiveChange=( values ) => {
    console.log(values);
    setActive(values);
  };

  const onMobileImageChange=( { fileList: newFileList } ) => {
    setMobileImage( newFileList );
  };
  const onWebImageChange=( { fileList: newFileList } ) => {
    setWebImage( newFileList );
  };
  
  const webAspectRatio = 2/1;
  const mobileAspectRatio = 1/1;

  return (
    <Page title='Dashboard: Advertisement Pages'>
      <Pageheader
        title='Edit advertisement page'
        subtitle='In this section you will edit advertisment'
        title_array={[ 'dashboard', 'content', 'advertisement','advertisement' ]}
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
            <Col span={12} style={{padding:'0 5rem'}}>
              <ImgCrop rotate aspect={mobileAspectRatio}>
                <AddUpload
                  listType="picture-card"
                  fileList={mobileImage}
                  onChange={onMobileImageChange}
                  beforeUpload={() => false}
                  className='hi'

                >
                  {mobileImage.length<1&&  <Iconify icon="clarity:mobile-solid" width={50} height={50}/>}
                </AddUpload>
              </ImgCrop>
            </Col>
            <Col span={12}  style={{padding:'0 5rem'}}>

              <ImgCrop rotate aspect={webAspectRatio}>
                <AddUpload
                  listType="picture-card"
                  fileList={WebImage}
                  onChange={onWebImageChange}
                  beforeUpload={() => false}
                >
                  {WebImage.length<1&&   <Iconify icon="heroicons:computer-desktop-solid" width={50} height={50}/>}
                </AddUpload>
              </ImgCrop>
            </Col>  
          </Row>

          <Row style={{marginTop:50}}>
          <Col span={8} >
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
          <Col span={8}>
              <Form.Item
                name='Duration'
                label='Duration'
                rules={[
                  {
                    required: true,
                    message: 'Please input the duration of advertismenet!',
                  }
                ]}
              >  
              <RangePicker showTime style={{width:'100%'}} />
              </Form.Item>
            </Col>
            <Col span={8} >
            <Form.Item name='status' label='Status'>
            <Select defaultValue={active} style={{ width: '100%' }} onChange={handleActiveChange}>
              <Option value={true}>Actice</Option>
              <Option value={false}>Inactive</Option>
            </Select>
              </Form.Item>
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

export default EditAdvertisement;
