import { filter } from 'lodash'
import { sentenceCase } from 'change-case'
import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
// material
import {
  Card,
  Table,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Typography,
  TableContainer,
  TablePagination,
} from '@mui/material'
// components
import Page from '../components/Page'
import Scrollbar from '../components/Scrollbar'
import SearchNotFound from '../components/SearchNotFound'
import { UserListHead, UserListToolbar, UserMoreMenu } from '../sections/@dashboard/user'
// mock
import ROLELIST from '../_mock/roles'
import Pageheader from 'src/components/Pageheader'
import ActionMenu from 'src/components/ActionMenu'
import ConfirmModal from 'src/components/ConfirmModal'

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'role', label: 'Role', alignRight: false },
  { id: 'permissions', label: 'Permissions', alignRight: false },
  { id: '' },
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
    return filter(array, _user => _user.role.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  }
  return stabilizedThis.map(el => el[0])
}

export default function Roles () {
  const [page, setPage] = useState(0)

  const [ confirmOpen, setConfirmOpen ]=useState( false )

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
      const newSelecteds = ROLELIST.map(n => n.role)
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
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1))
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

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - ROLELIST.length) : 0

  const filteredRoles = applySortFilter(ROLELIST, getComparator(order, orderBy), filterName)

  const isUserNotFound=filteredRoles.length===0


  const menuList=[ { link: '/dashboard/roles/update', text: 'Update', icon: 'eva:edit-fill' }, { link: '/dashboard/content/roles/view', text: 'Delete', icon: 'bxs:trash' } ];


  return (
    <>
      <ConfirmModal
        title='Delete Page?'
        subText='Are you sure you want to delete this Role?'
        open={confirmOpen}
        setOpen={setConfirmOpen}
      />
      <Page title='Dashboard: Roles and Permissions'>
      <Pageheader
        title='Roles and Permissions'
        subtitle='In this section you can assign roles'
        title_array={['dashboard', 'roles']}
        add_button={true}
        add_button_title='new role'
        add_button_link='/dashboard/roles/newrole'
      />
      <div style={{ paddingInline: '2rem' }}>

        <Card>
          <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={ROLELIST.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredRoles.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                    // const { id, name, role, status, company, avatarUrl, isVerified } = row
                    const { id, role, permissions } = row
                    const isItemSelected = selected.indexOf(role) !== -1

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
                          <Checkbox checked={isItemSelected} onChange={event => handleClick(event, role)} />
                        </TableCell>
                        <TableCell component='th' scope='row' padding='none'>                      
                            <Typography variant='subtitle2' noWrap>
                              {role}
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>{permissions}</TableCell>

                        <TableCell align='right'>
                          <ActionMenu menuList={menuList} setConfirmOpen={setConfirmOpen} />
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
            rowsPerPageOptions={[5, 10, 25]}
            component='div'
            count={ROLELIST.length}
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
