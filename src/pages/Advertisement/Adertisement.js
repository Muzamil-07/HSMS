import React, { useState } from 'react'
import Page from '../../components/Page'
import Pageheader from 'src/components/Pageheader'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import Iconify from 'src/components/Iconify'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import { UserMoreMenu } from 'src/sections/@dashboard/user'
import { Grid, Link} from '@mui/material'
import Pagination from '@mui/material/Pagination';

const Ads = () => {
  const [page, setPage] = useState(1);
  const handlePaginationChange = (event, value) => {
    setPage(value);
  };
  const ads = [
   'https://micdn-13a1c.kxcdn.com/images/sg/content-images/kfc-bucket-malaysia-day.jpg' ,'https://propakistani.pk/how-to/wp-content/uploads/2020/10/jazz-campaign-1.jpeg','https://pbs.twimg.com/media/FfRCkH1XEAEGup-.jpg','https://propakistani.pk/how-to/wp-content/uploads/2020/10/jazz-campaign-1.jpeg','https://micdn-13a1c.kxcdn.com/images/sg/content-images/kfc-bucket-malaysia-day.jpg' ,'https://propakistani.pk/how-to/wp-content/uploads/2020/10/jazz-campaign-1.jpeg','https://pbs.twimg.com/media/FfRCkH1XEAEGup-.jpg','https://propakistani.pk/how-to/wp-content/uploads/2020/10/jazz-campaign-1.jpeg','https://micdn-13a1c.kxcdn.com/images/sg/content-images/kfc-bucket-malaysia-day.jpg' ,'https://propakistani.pk/how-to/wp-content/uploads/2020/10/jazz-campaign-1.jpeg','https://pbs.twimg.com/media/FfRCkH1XEAEGup-.jpg','https://propakistani.pk/how-to/wp-content/uploads/2020/10/jazz-campaign-1.jpeg','https://micdn-13a1c.kxcdn.com/images/sg/content-images/kfc-bucket-malaysia-day.jpg' ,'https://propakistani.pk/how-to/wp-content/uploads/2020/10/jazz-campaign-1.jpeg','https://pbs.twimg.com/media/FfRCkH1XEAEGup-.jpg','https://propakistani.pk/how-to/wp-content/uploads/2020/10/jazz-campaign-1.jpeg','https://micdn-13a1c.kxcdn.com/images/sg/content-images/kfc-bucket-malaysia-day.jpg' ,'https://propakistani.pk/how-to/wp-content/uploads/2020/10/jazz-campaign-1.jpeg','https://pbs.twimg.com/media/FfRCkH1XEAEGup-.jpg','https://propakistani.pk/how-to/wp-content/uploads/2020/10/jazz-campaign-1.jpeg','https://propakistani.pk/how-to/wp-content/uploads/2020/10/jazz-campaign-1.jpeg','https://pbs.twimg.com/media/FfRCkH1XEAEGup-.jpg','https://propakistani.pk/how-to/wp-content/uploads/2020/10/jazz-campaign-1.jpeg','https://micdn-13a1c.kxcdn.com/images/sg/content-images/kfc-bucket-malaysia-day.jpg' ,'https://propakistani.pk/how-to/wp-content/uploads/2020/10/jazz-campaign-1.jpeg','https://pbs.twimg.com/media/FfRCkH1XEAEGup-.jpg','https://propakistani.pk/how-to/wp-content/uploads/2020/10/jazz-campaign-1.jpeg','https://propakistani.pk/how-to/wp-content/uploads/2020/10/jazz-campaign-1.jpeg','https://pbs.twimg.com/media/FfRCkH1XEAEGup-.jpg','https://propakistani.pk/how-to/wp-content/uploads/2020/10/jazz-campaign-1.jpeg','https://micdn-13a1c.kxcdn.com/images/sg/content-images/kfc-bucket-malaysia-day.jpg' ,'https://propakistani.pk/how-to/wp-content/uploads/2020/10/jazz-campaign-1.jpeg','https://pbs.twimg.com/media/FfRCkH1XEAEGup-.jpg','https://propakistani.pk/how-to/wp-content/uploads/2020/10/jazz-campaign-1.jpeg', 
  ];
  return (
  <Page title='Dashboard: Ads'>
    <Pageheader
      title='Advertisement'
      subtitle='In this section you can manage your advertisement'
      title_array={['dashboard', 'content', 'ads']}
      add_button={true}
      add_button_title='Add Advertisement'
      add_button_link='/dashboard/content/ads/add'
    />
    <div style={{ paddingInline: '2rem' }}>
    <Grid container spacing={2}>
    {ads.map((url,i)=>{
      return (i+1<=(page*9) && i+1>((page-1)*9)) ? <Grid item md={4}  sx={{marginTop:2}}>
       <AdvertisementCard imgUrl={url} />
     </Grid> : '';
    })}
    {page===Math.trunc(ads.length/9 +1) && <Grid item md={4} sx={{marginTop:2}}>
          <AddAdvertisementCard />
    </Grid>}
    </Grid>
    <Grid item md={12} sx={{marginTop:10}}>
    <Pagination count={Math.trunc(ads.length/9 +1)}  page={page} onChange={handlePaginationChange} sx={{display:'flex',justifyContent:'center'}} />
    </Grid>
    </div>
  </Page>
)}

const AddAdvertisementCard = () => {
  return (
    <Link href={'/dashboard/content/ads/add'}>
    <Card sx={{ maxWidth: 350, height:360 ,boxShadow:1,display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:`rgb(228,228,228)`,margin:'auto'}}>
          <IconButton aria-label='add' margin >
        <Iconify icon="bx:add-to-queue" width={50} height={50}/>
          </IconButton>  
    </Card>
    </Link>
  )
}

const AdvertisementCard = ({imgUrl}) => {
  return (
    <Card sx={{ maxWidth: 350, height:360 ,boxShadow:3,margin:'auto'}}>
      <CardHeader
      sx={{
        marginBottom:1
      }}
        action={
          <IconButton aria-label='settings'>
            <UserMoreMenu optionWidth={60} iconsOnly={true} editLink={'/dashboard/content/ads/edit'}/>
          </IconButton>
        }
        title='KFC - GT Road'
        subheader='Sep 14 to Sep 29 ,2022'
      />
      <CardMedia
        component='img'
        height='194'
        image= {imgUrl}
        alt='Paella dish'
      />
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'  sx={{
        marginTop:1
      }}>
          <StatusDropdown />
        </IconButton>
      </CardActions>
    </Card>
  )
}

const StatusSelect = styled(Select)(({ active }) => ({
  border: `1px solid ${active ? '#42ba96' : '#df4759'}`,
  outline: 'none',
  width: 100,
  borderRadius: 0,
  fontWeight: '700',
  color: active ? '#42ba96' : '#df4759',
  '.MuiSelect-icon': {
    fill: active ? '#42ba96' : '#df4759'
  },
  '.MuiSelect-select':{
   padding:0
  },
  '&:before': {
    borderColor: active ? '#42ba96' : '#df4759',
    outline: 'none'
  },
  '&:after': {
    borderColor: active ? '#42ba96' : '#df4759',
    outline: 'none'
  },
  '&:not(.Mui-disabled):hover::before': {
    boxShadow: 'none',
    outline: 'none',
    border: 'none',
    backgroundColor: 'transparent'
  },
  '&:hover': {
    boxShadow: 'none',
    outline: 'none',
    backgroundColor: 'transparent'
  },
  '&:focus-within': {
    boxShadow: 'none',
    outline: 'none',
    backgroundColor: 'transparent'
  },
  '.MuiMenu-list':{
    borderRadius:0
  },
  '& .MuiOutlinedInput-notchedOutline': {
    boxShadow: 'none',
    outline: 'none',
    border: 'none'
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    boxShadow: 'none',
    outline: 'none',
    backgroundColor: 'transparent'
  },
  '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
    boxShadow: 'none',
    outline: 'none',
    backgroundColor: 'transparent'
  },
  root: {
    color: active ? '#42ba96' : '#df4759'
  }
}))

const StatusDropdown = () => {
  const [active, setActive] = useState(true)
  const handleChange = event => {
    setActive(event.target.value)
  }
  return (
    <FormControl>
      <StatusSelect
        value={active}
        onChange={handleChange}
        displayEmpty
        active={active}
      >
        <MenuItem value={true} sx={{
           color: '#42ba96',
           paddingBottom:0,
           paddingTop:0,
           width: 100,
           fontWeight: '600',
          }}>
          <small> Active</small>
        </MenuItem>
        <MenuItem value={false}  sx={{
           color: '#df4759',
           paddingBottom:0,
           width: 100,
           fontWeight: '600',
        }}>
          <small> Inactive</small>
        </MenuItem>
      </StatusSelect>
    </FormControl>
  )
}

export default Ads
