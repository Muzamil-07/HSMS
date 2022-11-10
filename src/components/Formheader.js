import { Typography } from '@mui/material'
const Formheader=( { title } ) => {
  return (
    <>
      <div style={{}}>
        <Typography
          variant='h4'
          style={{
            opacity: 1,
            borderLeft: '2px solid black',
            paddingLeft: '0.5rem'
          }}
        >
          {title}
        </Typography>
      </div>
    </>
  )
}

export default Formheader
