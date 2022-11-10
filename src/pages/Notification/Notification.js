import React, { useState } from 'react'
import { filter } from 'lodash'
import Page from '../../components/Page'
import Pageheader from 'src/components/Pageheader'
import NOTIFICATIONLIST from '../../_mock/notification'
import ActionMenu from 'src/components/ActionMenu'
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
import Scrollbar from '../../components/Scrollbar'
import SearchNotFound from '../../components/SearchNotFound'
import { UserListHead, UserListToolbar } from '../../sections/@dashboard/user'

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'cnic', label: 'CNIC', alignRight: false },
  { id: 'notificationNo', label: 'Notification#', alignRight: false },
  { id: 'title', label: 'Title', alignRight: false },
  { id: '' }
]

// ----------------------------------------------------------------------

function descendingComparator (a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function getComparator (order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

function applySortFilter (array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })
  if (query) {
    return filter(
      array,
      _user => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    )
  }
  return stabilizedThis.map(el => el[0])
}

const Notification = () => {
  const [page, setPage] = useState(0)

  const [confirmOpen, setConfirmOpen] = useState(false)

  const [order, setOrder] = useState('asc')

  const [selected, setSelected] = useState([])

  const [orderBy, setOrderBy] = useState('name')

  const [filterName, setFilterName] = useState('')

  const [rowsPerPage, setRowsPerPage] = useState(5)

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = NOTIFICATIONLIST.map(n => n.name)
      setSelected(newSelecteds)
      return
    }
    setSelected([])
  }

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name)
    let newSelected = []
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      )
    }
    setSelected(newSelected)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleFilterByName = event => {
    setFilterName(event.target.value)
  }

  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - NOTIFICATIONLIST.length)
      : 0

  const filteredUsers = applySortFilter(
    NOTIFICATIONLIST,
    getComparator(order, orderBy),
    filterName
  )

  const menuList = [
    {
      link: '/dashboard/notification/view',
      text: 'View',
      icon: 'carbon:view-filled'
    },

    { link: '/dashboard/notification/view', text: 'Delete', icon: 'bxs:trash' }
  ]

  const isUserNotFound = filteredUsers.length === 0

  return (
    <Page title='Dashboard: Notification'>
      <Pageheader
        title='Notification'
        subtitle='In this section you create notifications'
        title_array={['dashboard', 'notification', 'add']}
        add_button={true}
        add_button_title='Create Notification'
        add_button_link='/dashboard/notification/add'
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
                  rowCount={NOTIFICATIONLIST.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredUsers
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(row => {
                      const {
                        id,
                        name,
                        cnic,
                        notificationNo,
                        avatarUrl,
                        title
                      } = row
                      const isItemSelected = selected.indexOf(name) !== -1

                      return (
                        <TableRow
                          hover
                          key={id}
                          tabIndex={-1}
                          role='checkbox'
                          selected={isItemSelected}
                          aria-checked={isItemSelected}
                        >
                          <TableCell padding='checkbox' width={'5%'}>
                            <Checkbox
                              checked={isItemSelected}
                              onChange={event => handleClick(event, name)}
                            />
                          </TableCell>
                          <TableCell
                            width={'25%'}
                            component='th'
                            scope='row'
                            padding='none'
                          >
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
                          <TableCell width={'25%'} align='left'>
                            {cnic}
                          </TableCell>
                          <TableCell width={'15%'} align='left'>
                            {notificationNo}
                          </TableCell>{' '}
                          <TableCell width={'20%'} align='left'>
                            {title}
                          </TableCell>
                          <TableCell width={'10%'} align='right'>
                            <ActionMenu
                              setConfirmOpen={setConfirmOpen}
                              menuList={menuList}
                            />
                          </TableCell>
                        </TableRow>
                      )
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>

                {isUserNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align='center' colSpan={10} sx={{ py: 3 }}>
                        <SearchNotFound searchQuery={filterName} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component='div'
            count={NOTIFICATIONLIST.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </div>
    </Page>
  )
}
export default Notification
