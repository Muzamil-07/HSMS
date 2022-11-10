import React from 'react'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button
} from '@mui/material'
import Iconify from './Iconify'

const ConfirmModal = ({ title, subText, open, setOpen }) => {
  return (
    <>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          <Iconify icon='emojione:warning' />
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            {subText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant='contained' onClick={() => setOpen(false)} autoFocus>
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ConfirmModal
