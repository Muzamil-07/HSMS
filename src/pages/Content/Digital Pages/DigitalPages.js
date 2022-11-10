import React, { useState } from 'react'
import Page from '../../../components/Page'
import { filter } from 'lodash'
import Pageheader from 'src/components/Pageheader'
import {
  Card,
  Table,
  Stack,
  Avatar,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Typography,
  TableContainer,
  TablePagination
} from '@mui/material'
import DIGITALLIST from '../../../_mock/digital'
import {
  UserListHead,
  UserListToolbar,
} from '../../../sections/@dashboard/user'
import Scrollbar from '../../../components/Scrollbar'
import SearchNotFound from '../../../components/SearchNotFound'
import { Link } from 'react-router-dom'
import Iconify from 'src/components/Iconify'
import ConfirmModal from 'src/components/ConfirmModal'
import ActionMenu from 'src/components/ActionMenu'
// ----------------------------------------------------------------------

const TABLE_HEAD=[
  { id: 'name', label: 'Brand Name', alignRight: false },
  { id: 'category', label: 'Category', alignRight: false },
  { id: 'contact', label: 'Contact List', alignRight: false },
  { id: 'address', label: 'Addresses', alignRight: false },
  { id: '' }

]

// ----------------------------------------------------------------------

function descendingComparator( a, b, orderBy ) {
  if ( b[ orderBy ]<a[ orderBy ] ) {
    return -1
  }
  if ( b[ orderBy ]>a[ orderBy ] ) {
    return 1
  }
  return 0
}

function getComparator( order, orderBy ) {
  return order==='desc'
    ? ( a, b ) => descendingComparator( a, b, orderBy )
    :( a, b ) => -descendingComparator( a, b, orderBy )
}

function applySortFilter( array, comparator, query ) {
  const stabilizedThis=array.map( ( el, index ) => [ el, index ] )
  stabilizedThis.sort( ( a, b ) => {
    const order=comparator( a[ 0 ], b[ 0 ] )
    if ( order!==0 ) return order
    return a[ 1 ]-b[ 1 ]
  } )
  if ( query ) {
    return filter(
      array,
      _user => _user.name.toLowerCase().indexOf( query.toLowerCase() )!==-1
    )
  }
  return stabilizedThis.map( el => el[ 0 ] )
}





const DigitalPages=() => {
  const [ page, setPage ]=useState( 0 )

  const [ confirmOpen, setConfirmOpen ]=useState( false )

  const [ order, setOrder ]=useState( 'asc' )

  const [ selected, setSelected ]=useState( [] )

  const [ orderBy, setOrderBy ]=useState( 'name' )

  const [ filterName, setFilterName ]=useState( '' )

  const [ rowsPerPage, setRowsPerPage ]=useState( 5 )

  const handleRequestSort=( event, property ) => {
    const isAsc=orderBy===property&&order==='asc'
    setOrder( isAsc? 'desc':'asc' )
    setOrderBy( property )
  }

  const handleSelectAllClick=event => {
    if ( event.target.checked ) {
      const newSelecteds=DIGITALLIST.map( n => n.name )
      setSelected( newSelecteds )
      return
    }
    setSelected( [] )
  }

  const handleClick=( event, name ) => {
    const selectedIndex=selected.indexOf( name )
    let newSelected=[]
    if ( selectedIndex===-1 ) {
      newSelected=newSelected.concat( selected, name )
    } else if ( selectedIndex===0 ) {
      newSelected=newSelected.concat( selected.slice( 1 ) )
    } else if ( selectedIndex===selected.length-1 ) {
      newSelected=newSelected.concat( selected.slice( 0, -1 ) )
    } else if ( selectedIndex>0 ) {
      newSelected=newSelected.concat(
        selected.slice( 0, selectedIndex ),
        selected.slice( selectedIndex+1 )
      )
    }
    setSelected( newSelected )
  }

  const handleChangePage=( event, newPage ) => {
    setPage( newPage )
  }

  const handleChangeRowsPerPage=event => {
    setRowsPerPage( parseInt( event.target.value, 10 ) )
    setPage( 0 )
  }

  const handleFilterByName=event => {
    setFilterName( event.target.value )
  }

  const emptyRows=
    page>0? Math.max( 0, ( 1+page )*rowsPerPage-DIGITALLIST.length ):0

  const filteredUsers=applySortFilter(
    DIGITALLIST,
    getComparator( order, orderBy ),
    filterName
  )

  const isUserNotFound=filteredUsers.length===0


  const menuList=[ { link: '/dashboard/content/digitalpages/view', text: 'View', icon: 'carbon:view-filled' }, { link: '/dashboard/content/digitalpages/update', text: 'Update', icon: 'eva:edit-fill' }, { link: '/dashboard/content/digitalpages/', text: 'Delete', icon: 'bxs:trash' } ];

  return (
    <>
      <ConfirmModal
        title='Delete Page?'
        subText='Are you sure you want to delete this digital page?'
        open={confirmOpen}
        setOpen={setConfirmOpen}
      />
      <Page title='Dashboard: Digital Pages'>
        <Pageheader
          title='Digital Pages'
          subtitle='In this section you add update and delete Roles and Permissions of all
        users'
          title_array={[ 'dashboard', 'content', 'digital pages' ]}
          add_button={true}
          add_button_title='New Digital Page'
          add_button_link='/dashboard/content/digitalpages/add'
        />


        <div style={{ paddingLeft: '2rem' }}>
          <Card>
            <UserListToolbar
              numSelected={selected.length}
              filterName={filterName}
              onFilterName={handleFilterByName}
            />

            <Scrollbar>
              <TableContainer sx={{ minWidth: 800 }}>
                <Table>
                  <UserListHead
                    order={order}
                    orderBy={orderBy}
                    headLabel={TABLE_HEAD}
                    rowCount={DIGITALLIST.length}
                    numSelected={selected.length}
                    onRequestSort={handleRequestSort}
                    onSelectAllClick={handleSelectAllClick}
                  />
                  <TableBody>
                    {filteredUsers
                      .slice( page*rowsPerPage, page*rowsPerPage+rowsPerPage )
                      .map( row => {
                        const {
                          id,
                          name,
                          category,
                          contact,
                          address,
                          avatarUrl,
                        }=row
                        console.log( row );
                        const isItemSelected=selected.indexOf( name )!==-1

                        return (
                          <TableRow
                            hover
                            key={id}
                            tabIndex={-1}
                            role='checkbox'
                            selected={isItemSelected}
                            aria-checked={isItemSelected}
                          >
                            <TableCell padding='checkbox'>
                              <Checkbox
                                checked={isItemSelected}
                                onChange={event => handleClick( event, name )}
                              />
                            </TableCell>
                            <TableCell component='th' scope='row' padding='none'>
                              <Stack
                                direction='row'
                                alignItems='center'
                                spacing={2}
                              >
                                <Avatar alt={name} src={avatarUrl} />
                                <Typography variant='subtitle2' noWrap>
                                  {name}
                                </Typography>
                              </Stack>
                            </TableCell>
                            <TableCell align='left'>{category}</TableCell>
                            <TableCell align='left'>{contact}</TableCell>
                            <TableCell align='left'>
                              {address}
                            </TableCell>


                            <TableCell align='right'>
                              <ActionMenu menuList={menuList} setConfirmOpen={setConfirmOpen} />
                            </TableCell>
                          </TableRow>
                        )
                      } )}
                    {emptyRows>0&&(
                      <TableRow style={{ height: 53*emptyRows }}>
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>

                  {isUserNotFound&&(
                    <TableBody>
                      <TableRow>
                        <TableCell align='center' colSpan={6} sx={{ py: 3 }}>
                          <SearchNotFound searchQuery={filterName} />
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  )}
                </Table>
              </TableContainer>
            </Scrollbar>

            <TablePagination
              rowsPerPageOptions={[ 5, 10, 25 ]}
              component='div'
              count={DIGITALLIST.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Card>
        </div>

      </Page>
    </>

  )
}

export default DigitalPages
