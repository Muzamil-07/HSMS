import React from 'react'
import BreadCrumbs from './BreadCrumbs'
import { Stack, Button, Typography } from '@mui/material'
import Iconify from './Iconify'
import { Link as RouterLink } from 'react-router-dom'

const Pageheader = ({
  title,
  subtitle,
  title_array,
  add_button,
  add_button_title,
  add_button_link
}) => {
  return (
    <>
      <div style={{ paddingInline: '2rem', marginBottom: '3rem' }}>
        <div style={{ paddingBottom: '0.7rem' }}>
          <BreadCrumbs title_array={title_array} />
        </div>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
        >
          <div>
            <Typography variant='h4'>{title}</Typography>
            <small>{subtitle}</small>
          </div>
          {add_button && (
            <Button
              variant='contained'
              component={RouterLink}
              to={add_button_link}
              startIcon={<Iconify icon='eva:plus-fill' />}
            >
              {add_button_title}
            </Button>
          )}
        </Stack>
      </div>
    </>
  )
}

export default Pageheader
