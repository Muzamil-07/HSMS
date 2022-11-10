import React, { useState } from 'react'
import Page from 'src/components/Page'
import Pageheader from 'src/components/Pageheader'
import { Form, Input, Select, Upload } from 'antd'
import { Button } from '@mui/material'
import './../../css/societyforms.css'

const { Option } = Select
const AddSocietyForm = () => {
  const [fileList, setFileList] = useState([])
  const onImageChange = ({ fileList: newFileList }) => {
    setFileList(newFileList)
    console.log(newFileList)
  }
  // const onPreview=async ( file ) => {
  //   let src=file.url;
  //   if ( !src ) {
  //     src=await new Promise( ( resolve ) => {
  //       const reader=new FileReader();
  //       reader.readAsDataURL( file.originFileObj );
  //       reader.onload=() => resolve( reader.result );
  //     } );
  //   }
  //   const image=new Image();
  //   image.src=src;
  //   const imgWindow=window.open( src );
  //   imgWindow?.document.write( image.outerHTML );
  // };
  const onFinish = values => {
    console.log('Success:', values)
  }
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }
  return (
    <Page title='Dashboard: Society Forms'>
      <Pageheader
        title='Add Society Form'
        subtitle='In this section you add new society form'
        title_array={['dashboard', 'content', 'add']}
        add_button={false}
      />
      <div style={{ paddingInline: '2rem' }}>
        <Form
          name='basic'
          layout='vertical'
          labelCol={{
            span: 8
          }}
          wrapperCol={{
            span: 12
          }}
          initialValues={{
            remember: true
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label='Form Title'
            name='title'
            rules={[
              {
                required: true,
                message: 'Please input form title!'
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='Category'
            name='category'
            rules={[
              {
                required: true,
                message: 'Please input category!'
              }
            ]}
          >
            <Select
              showSearch
              placeholder='Select a person'
              optionFilterProp='children'
              filterOption={(input, option) =>
                option.children.toLowerCase().includes(input.toLowerCase())
              }
            >
              <Option value='jack'>Jack</Option>
              <Option value='lucy'>Lucy</Option>
              <Option value='tom'>Tom</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label=''
            name='pdf'
            rules={[
              {
                required: true,
                message: 'Please upload form pdf!'
              }
            ]}
          >
            <div className='test'>
              <Upload
                accept='pdf'
                multiple={false}
                listType='picture-card'
                fileList={fileList}
                onChange={onImageChange}
                // onPreview={onPreview}
                beforeUpload={() => false}
              >
                {fileList.length < 1 && '+  Click here to upload form pdf'}
              </Upload>
            </div>
          </Form.Item>

          <Form.Item>
            <Button variant='contained' type='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Page>
  )
}

export default AddSocietyForm
