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




export const UpdateAssignedPlot=() => {

  const onFinish=( values ) => {
    console.log( 'Received values of form:', values );
  };

  const [ fileList, setFileList ]=useState( [] );
  const onImageChange=( { fileList: newFileList } ) => {
    setFileList( newFileList );
    console.log( newFileList );
  };


  return (
    <Page title='Dashboard: Update Assignend Plots'>
      <Pageheader
        title='Update Assigned Plot'
        subtitle='In this section you can update assigned plot to user'
        title_array={[ 'dashboard', 'plots', 'update assign plot' ]}
      />
      <div style={{ paddingLeft: '2rem' }}>
        <Alert
          style={{
            width: '50%',
            height: '10vh',
            marginBottom: '2rem',
            background: 'white',
            borderBlock: '1px solid #d9d9d9',
            borderRight: '1px solid #d9d9d9',
            borderLeft: '2px solid #91d5ff'
          }}
          message={
            <>
              <span>See complete user detail</span>
              <Button
                style={{ border: 'none', textDecoration: 'underline' }}
                component={RouterLink}
                to='/dashboard/users/viewuser'
              >
                Click here
              </Button>
            </>
          }
          type='info'
          showIcon
        />

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
              label='Select plot, you want to assign to user'
              rules={[
                {
                  required: true,
                  message: 'Please select plot'
                }
              ]}
            >
              <Select
                showSearch
                placeholder='Select a plot'
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
              name='user'
              label='Select user for plot assignment'
              rules={[
                {
                  required: true,
                  message: 'Please select user'
                }
              ]}
            >
              <Select
                showSearch
                placeholder='Select a User'
                optionFilterProp='children'
                filterOption={( input, option ) =>
                  option.children.toLowerCase().includes( input.toLowerCase() )
                }
              >
                {/* {DIGITAL_CATEGORIES.map( ( opt, index ) => <Option key={index} value={opt}>{opt}</Option> )} */}
              </Select>
            </Form.Item>
          </Col>


          <Form.Item>
            <Button variant="contained" color="primary" type='submit'>
              Update
            </Button>
          </Form.Item>
        </Form>
      </div>

    </Page>
  )
}
