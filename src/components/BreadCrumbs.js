import React from 'react'
import { Breadcrumbs } from '@mui/material'

const BreadCrumbs = ({ title_array }) => {
  return (
    <>
      <Breadcrumbs sx={{ cursor: 'pointer' }}>
        {title_array.map((item, i) => {
          return (
            <small
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              {item}
            </small>
          )
        })}
      </Breadcrumbs>
    </>
  )
}

export default BreadCrumbs
