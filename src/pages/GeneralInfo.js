import React from 'react'
import { Stack, Typography } from '@mui/material'
import Page from '../components/Page'
import Pageheader from 'src/components/Pageheader'

const GeneralInfo = () => (
  <Page title='Dashboard: General Information'>
    <Pageheader
      title='General Information'
      subtitle='In this section you can find General Information'
      title_array={['dashboard', 'content', 'general info']}
    />
    <div style={{ paddingInline: '2rem' }}></div>
  </Page>
)

export default GeneralInfo
