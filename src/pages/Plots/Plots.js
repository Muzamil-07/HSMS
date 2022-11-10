import React, { useState } from 'react'
import Page from '../../components/Page'
import Pageheader from 'src/components/Pageheader'
import { filter } from 'lodash'
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
import PLOTSLIST from '../../_mock/plots'
import {
  UserListHead,
  UserListToolbar,
} from '../../sections/@dashboard/user'
import Scrollbar from '../../components/Scrollbar'
import SearchNotFound from '../../components/SearchNotFound'
import { Link } from 'react-router-dom'
import Iconify from 'src/components/Iconify'
import ConfirmModal from 'src/components/ConfirmModal'
import ActionMenu from 'src/components/ActionMenu'
// ----------------------------------------------------------------------



const TABLE_HEAD=[
  { id: 'plot_no', label: 'Plot no', alignRight: false },
  { id: 'area', label: 'Area', alignRight: false },
  { id: 'block', label: 'Block', alignRight: false },
  { id: 'category', label: 'Category', alignRight: false },
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
      _user => _user.plot_no.toLowerCase().indexOf( query.toLowerCase() )!==-1
    )
  }
  return stabilizedThis.map( el => el[ 0 ] )
}





export default function Plots() {

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
      const newSelecteds=PLOTSLIST.map( n => n.plot_no )
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
    page>0? Math.max( 0, ( 1+page )*rowsPerPage-PLOTSLIST.length ):0

  const filteredUsers=applySortFilter(
    PLOTSLIST,
    getComparator( order, orderBy ),
    filterName
  )

  const isUserNotFound=filteredUsers.length===0

  const menuList=[ { link: '/dashboard/plots/update', text: 'Update', icon: 'eva:edit-fill' }, { text: 'Delete', icon: 'bxs:trash' } ];

  return (
    <>
      <ConfirmModal
        title='Delete plot?'
        subText='Are you sure you want to delete the plot information?'
        open={confirmOpen}
        setOpen={setConfirmOpen}
      />
      <Page title='Dashboard: Plots'>
        <Pageheader
          title='Plots'
          subtitle='In this section you can see all the plots of your society'
          title_array={[ 'Dashboard', 'Plots' ]}
          add_button={true}
          add_button_title={'New Plot'}
          add_button_link='/dashboard/plots/add'
        />
        <div style={{ paddingInline: '2rem' }}>
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
                    rowCount={PLOTSLIST.length}
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
                          plot_no,
                          area,
                          block,
                          category
                        }=row
                        const isItemSelected=selected.indexOf( plot_no )!==-1

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
                                onChange={event => handleClick( event, plot_no )}
                              />
                            </TableCell>
                            <TableCell component='th' scope='row' >
                              {plot_no}
                            </TableCell>
                            <TableCell align='left'>{area}</TableCell>
                            <TableCell align='left'>
                              {block}
                            </TableCell>
                            <TableCell align='left'>
                              {category}
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
              count={PLOTSLIST.length}
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
