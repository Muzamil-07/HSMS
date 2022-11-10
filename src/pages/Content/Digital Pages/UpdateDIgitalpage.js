import React, { useState } from 'react'
import Page from '../../../components/Page'
import Pageheader from 'src/components/Pageheader'
import {
  Form,
  Input,
  Select,
  Row,
  Col,
  Upload,
} from 'antd'
import Button from '@mui/material/Button';
import ImgCrop from 'antd-img-crop';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';


const { Option }=Select

const DIGITAL_CATEGORIES=[ 'Banks', 'Restaurants', 'RealEstate', 'Hospitals', 'Pharmicies', 'Architects', 'Schools', 'HairSaloons', 'Hardware', 'Gasoline', 'Furniture', 'Cafes', 'Builders', 'Apparels', 'Grocery', 'Utilities' ]



const ContactAddress=() => {

  return (
    <Form.List name="Address_contacts">
      {( fields, { add, remove } ) => {
        return (
          <div>
            {fields.map( ( field, index ) => (
              <div key={field.key}>
                <Row>
                  <Col span={8}>
                    <Form.Item
                      name={[ index, "phone" ]}
                      label={"Phone no-"+( index+1 )}
                      rules={[ { required: true } ]}
                    >
                      <Input placeholder="Enter phone no" />
                    </Form.Item>
                  </Col>

                  <Col span={8}>
                    <Form.Item name={[ index, "address" ]} label={"Address-"+( index+1 )} rules={[ { required: true } ]}
                    >
                      <Input placeholder="Enter address" />
                    </Form.Item>
                  </Col>
                </Row>



                {fields.length>=1? (
                  <Button
                    style={{ marginBottom: '1rem' }}
                    variant="contained"
                    onClick={() => remove( field.name )}
                    icon={<MinusCircleOutlined />}
                    color='error'

                  >
                    Remove Above Information
                  </Button>


                ):null}
              </div>
            ) )}
            {/* <Divider /> */}
            <Form.Item>
              <Button
                onClick={() => add()}
                style={{ width: "70%" }}
              >
                <PlusOutlined /> Add Address and Contact
              </Button>
            </Form.Item>
          </div>
        );
      }}
    </Form.List>
  )
}


const UpdateDigitalPage=() => {

  const onFinish=( values ) => {
    console.log( 'Received values of form:', values );
  };

  const [ fileList, setFileList ]=useState( [] );
  const onImageChange=( { fileList: newFileList } ) => {
    setFileList( newFileList );
    console.log( newFileList );
  };
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


  return (
    <Page title='Dashboard: Digital Pages'>
      <Pageheader
        title='Update Digital Pages'
        subtitle='In this section you add update and delete Roles and Permissions of all
        users'
        title_array={[ 'dashboard', 'content', 'digital pages' ]}
      />
      <div style={{ paddingLeft: '2rem' }}>
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
          <Row>
            <Col span={24}>
              <ImgCrop rotate>
                <Upload
                  listType="picture-card"
                  fileList={fileList}
                  onChange={onImageChange}
                  // onPreview={onPreview}
                  beforeUpload={() => false}
                >
                  {fileList.length<1&&'+  Logo'}
                </Upload>
              </ImgCrop>
            </Col>
          </Row>

          <Row>

            <Col span={8}>
              <Form.Item
                name='category'
                label='Category'
                rules={[
                  {
                    required: true,
                    message: 'Please select category'
                  }
                ]}
              >
                <Select
                  showSearch
                  placeholder='Select a category'
                  optionFilterProp='children'
                  filterOption={( input, option ) =>
                    option.children.toLowerCase().includes( input.toLowerCase() )
                  }
                >
                  {DIGITAL_CATEGORIES.map( ( opt, index ) => <Option key={index} value={opt}>{opt}</Option> )}
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
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

          </Row>

          <Row>
            <Col span={24}>
              <ContactAddress />
            </Col>

          </Row>



          <Form.Item>
            <Button variant="contained" color="primary" type='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>

    </Page>
  )
}

export default UpdateDigitalPage;
