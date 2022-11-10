import React, { useState } from 'react'
import Page from '../../components/Page'
import Pageheader from 'src/components/Pageheader'
import {
  Form,
  Input,
  Select,
  Row,
  Col,
  Upload,
  Alert,
} from 'antd'
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom'




export const AddPlot=() => {

  const onFinish=( values ) => {
    console.log( 'Received values of form:', values );
  };

  const [ fileList, setFileList ]=useState( [] );
  const onImageChange=( { fileList: newFileList } ) => {
    setFileList( newFileList );
    console.log( newFileList );
  };

  return (
    <Page title='Dashboard: Plots Detail'>
      <Pageheader
        title='Plots'
        subtitle='In this section you add update and delete plots'
        title_array={[ 'dashboard', 'plots', 'assign plot' ]}
      />
      <div style={{ paddingLeft: '2rem' }}>


        <Form
          labelCol={{
            span: 14
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
          <Col span={8}>
            <Form.Item
              name='block'
              label='Select Block'
              rules={[
                {
                  required: true,
                  message: 'Please select block'
                }
              ]}
            >
              <Select
                showSearch
                placeholder='Select a block'
                optionFilterProp='children'
                filterOption={( input, option ) =>
                  option.children.toLowerCase().includes( input.toLowerCase() )
                }
              >
                {/* {DIGITAL_CATEGORIES.map( ( opt, index ) => <Option key={index} value={opt}>{opt}</Option> )} */}
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name='plot'
              label='Plot no'
              rules={[
                {
                  required: true,
                  message: 'Please enter plot no'
                }
              ]}
            >
              <Input placeholder='Enter plot no' />

            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              name='category'
              label='Plot category'
              rules={[
                {
                  required: true,
                  message: 'Please select category for plot'
                }
              ]}
            >
              <Select
                showSearch
                placeholder='Select a category for plot'
                optionFilterProp='children'
                filterOption={( input, option ) =>
                  option.children.toLowerCase().includes( input.toLowerCase() )
                }
              >
                {/* {DIGITAL_CATEGORIES.map( ( opt, index ) => <Option key={index} value={opt}>{opt}</Option> )} */}
              </Select>
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              name='category'
              label='Plot area'
              rules={[
                {
                  required: true,
                  message: 'Please select category for plot'
                }
              ]}
            >
              <Select
                showSearch
                placeholder='Select a plot are'
                optionFilterProp='children'
                filterOption={( input, option ) =>
                  option.children.toLowerCase().includes( input.toLowerCase() )
                }
              >
                {/* {DIGITAL_CATEGORIES.map( ( opt, index ) => <Option key={index} value={opt}>{opt}</Option> )} */}
              </Select>
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              name='plot_price'
              label='Plot Price'
              rules={[
                {
                  required: true,
                  message: 'Please enter plot price'
                }
              ]}
            >
              <Input type='number' placeholder='Enter plot price' />

            </Form.Item>
          </Col>


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
