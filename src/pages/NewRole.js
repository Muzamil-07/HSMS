import React, { useState } from 'react'
import Page from 'src/components/Page'
import Pageheader from 'src/components/Pageheader'
import { Select, Input, Form } from 'antd';
import { Button } from '@mui/material';

const opts=[
  { value: 'create user', label: 'Create User' },
  { value: 'update user', label: 'Update User' },
  { value: 'delete user', label: 'Delete User' },
  { value: 'view user', label: 'View User' },
];
const { Option }=Select;
const children=[];
for ( let i=0; i<4; i++ ) {
  children.push( <Option key={opts[ i ].label}>{opts[ i ].label}</Option> );
}
const handleChange=( value ) => {
  console.log( `selected ${value}` );
};

export default function NewRole() {
  const [ selectedOption, setSelectedOption ]=useState( null );
  const handlePermissionsChange=( selectedOption ) => {
    console.log( 'Permissions:', selectedOption );
  }

  const onFinish=( values ) => {
    console.log( values );
  }

  return (
    <Page title='Dashboard: New Role'>
      <Pageheader
        title='Create new Role'
        subtitle='In this section you can create new role along with its permissions'
        title_array={[ 'dashboard', 'roles', 'newrole' ]}
        add_button={false}
      />
      <div style={{ paddingInline: '2rem' }}>

        <Form
          name="basic"
          wrapperCol={{
            span: 11,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >

          <Form.Item
            name="role"
            rules={[
              {
                required: true,
                message: 'Please Enter Role!',
              },
            ]}
          >
            <Input placeholder="Enter Role" allowClear onChange={() => { }} />

          </Form.Item>



          <Form.Item
            name="permission"
            rules={[
              {
                required: true,
                message: 'Please select permission!',
              },
            ]}
          >
            <Select
              mode="multiple"
              allowClear
              style={{
                width: '100%',
              }}
              placeholder="Set Permissions"
              onChange={handleChange}
            >
              {children}
            </Select>
          </Form.Item>
          <Button variant='contained' htmlType="submit">
            Add role
          </Button>

        </Form>






      </div>

    </Page> )
};
