import { useRef, useState } from 'react';
import { Link, Link as RouterLink } from 'react-router-dom';
// material
import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from '@mui/material';
// component
import Iconify from './../components/Iconify';

// ----------------------------------------------------------------------

export default function ActionMenu( { menuList, setConfirmOpen } ) {
  const ref=useRef( null );
  const [ isOpen, setIsOpen ]=useState( false );

  return (
    <>
      <IconButton ref={ref} onClick={() => setIsOpen( true )}>
        <Iconify icon="eva:more-vertical-fill" width={20} height={20} />
      </IconButton>
      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen( false )}
        PaperProps={{
          sx: { width: 200, maxWidth: '100%' },
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >        {
          menuList.map( ( menu ) => {
            if ( menu.text.toLowerCase().trim().includes( 'delete' ) ) {
              return <MenuItem onClick={() => setConfirmOpen( true )} sx={{ color: 'text.secondary' }}>
                <ListItemIcon>
                  <Iconify icon={menu.icon} width={24} height={24} />
                </ListItemIcon>
                <ListItemText primary={menu.text} primaryTypographyProps={{ variant: 'body2' }} />
              </MenuItem>
            }
            else {
              return <MenuItem component={RouterLink} to={menu.link} sx={{ color: 'text.secondary' }}>
                <ListItemIcon>
                  <Iconify icon={menu.icon} width={24} height={24} />
                </ListItemIcon>
                <ListItemText primary={menu.text} primaryTypographyProps={{ variant: 'body2' }} />
              </MenuItem>
            }



          } )
        }
      </Menu>
    </>
  );
}
