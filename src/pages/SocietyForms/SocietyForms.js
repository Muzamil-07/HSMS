import React, { useState } from 'react'
import { filter } from 'lodash'
import Page from '../../components/Page'
import Pageheader from 'src/components/Pageheader'
import {
  Card,
  Table,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination
} from '@mui/material'
import Scrollbar from '../../components/Scrollbar'
import SearchNotFound from '../../components/SearchNotFound'
import { UserListHead, UserListToolbar } from '../../sections/@dashboard/user'
import SOCIETYFORMSLIST from '../../_mock/societyForms'
import ActionMenu from 'src/components/ActionMenu'
import ConfirmModal from 'src/components/ConfirmModal'

const TABLE_HEAD = [
  { id: 'form', label: 'Form', alignRight: false },
  { id: 'category', label: 'Category', alignRight: false },
  { id: '' },
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
      _user => _user.category.toLowerCase().indexOf(query.toLowerCase()) !== -1
    )
  }
  return stabilizedThis.map(el => el[0])
}

const SocietyForms = () => {
  const [page, setPage] = useState(0)

  const [order, setOrder] = useState('asc')

  const [confirmOpen, setConfirmOpen] = useState(false)

  const [selected, setSelected] = useState([])

  const [orderBy, setOrderBy] = useState('category')

  const [filterName, setFilterName] = useState('')

  const [rowsPerPage, setRowsPerPage] = useState(5)

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = SOCIETYFORMSLIST.map(n => n.category)
      setSelected(newSelecteds)
      return
    }
    setSelected([])
  }

  const handleClick = (event, category) => {
    const selectedIndex = selected.indexOf(category)
    let newSelected = []
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, category)
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
      ? Math.max(0, (1 + page) * rowsPerPage - SOCIETYFORMSLIST.length)
      : 0

  const filteredUsers = applySortFilter(
    SOCIETYFORMSLIST,
    getComparator(order, orderBy),
    filterName
  )

  const menuList = [
    {
      link: '/dashboard/complaint/view',
      text: 'View',
      icon: 'carbon:view-filled'
    },

    { link: '/dashboard/complaint/view', text: 'Delete', icon: 'bxs:trash' }
  ]

  const isUserNotFound = filteredUsers.length === 0

  return (
    <>
      <ConfirmModal
        title='Delete Form?'
        subText='Are you sure you want to delete this form?'
        open={confirmOpen}
        setOpen={setConfirmOpen}
      />
      <Page title='Dashboard: Society Forms'>
        <Pageheader
          title='Society Forms'
          subtitle='In this section you add update and delete Roles and Permissions of all
   users'
          title_array={['dashboard', 'content', 'society forms']}
          add_button={true}
          add_button_link='/dashboard/content/societyforms/add'
          add_button_title='Add new Form'
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
                    rowCount={SOCIETYFORMSLIST.length}
                    numSelected={selected.length}
                    onRequestSort={handleRequestSort}
                    onSelectAllClick={handleSelectAllClick}
                  />
                  <TableBody>
                    {filteredUsers
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map(row => {
                        const { id, form, category } = row
                        const isItemSelected = selected.indexOf(category) !== -1

                        return (
                          <TableRow
                            hover
                            key={id}
                            tabIndex={-1}
                            role='checkbox'
                            selected={isItemSelected}
                            aria-checked={isItemSelected}
                          >
                            <TableCell padding='checkbox' width={'10%'}>
                              <Checkbox
                                checked={isItemSelected}
                                onChange={event => handleClick(event, category)}
                              />
                            </TableCell>
                            <TableCell width={'25%'} align='left'>
                              {form}
                            </TableCell>
                            <TableCell width={'25%'} align='left'>
                              {category}
                            </TableCell>
                            <TableCell width='39%'></TableCell>
                            <TableCell width={'1%'} align='right'>
                              <ActionMenu
                                menuList={menuList}
                                setConfirmOpen={setConfirmOpen}
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
              count={SOCIETYFORMSLIST.length}
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

export default SocietyForms

// const data = [
//   <a>Man charged over missing wedding girl.</a>,
//   <a href=''>Japanese princess to wed commoner.</a>,
//   <a href=''>Australian walks 100km after outback crash.</a>,
//   <a href=''>Los Angeles battles huge wildfires.</a>
// ]

// <Collapse
//   bordered={false}
//   expandIconPosition='end'
//   style={{ background: '#f9fafb00', width: '65%' }}
//   >
//           <Panel
//             header={
//               <Typography
//                 style={{
//                   paddingBlock: '0.7rem',
//                   fontWeight: 500,
//                   fontSize: 17
//                 }}
//               >
//                 Building Control Forms
//               </Typography>
//             }
//             key='1'
//           >
//             <List
//               size='large'
//               dataSource={data}
//               renderItem={item => <List.Item>{item}</List.Item>}
//             />
//           </Panel>
//           <Panel
//             header={
//               <Typography
//                 style={{
//                   paddingBlock: '0.7rem',
//                   fontWeight: 500,
//                   fontSize: 17
//                 }}
//               >
//                 Finance Forms
//               </Typography>
//             }
//             key='2'
//           >
//             <List
//               size='large'
//               dataSource={data}
//               renderItem={item => <List.Item>{item}</List.Item>}
//             />
//           </Panel>
//           <Panel
//             header={
//               <Typography
//                 style={{
//                   paddingBlock: '0.7rem',
//                   fontWeight: 500,
//                   fontSize: 17
//                 }}
//               >
//                 Transfer Forms
//               </Typography>
//             }
//             key='3'
//           >
//             <List
//               size='large'
//               dataSource={data}
//               renderItem={item => <List.Item>{item}</List.Item>}
//             />
//           </Panel>
//           <Panel
//             header={
//               <Typography
//                 style={{
//                   paddingBlock: '0.7rem',
//                   fontWeight: 500,
//                   fontSize: 17
//                 }}
//               >
//                 Land Forms
//               </Typography>
//             }
//             key='4'
//           >
//             <List
//               size='large'
//               dataSource={data}
//               renderItem={item => <List.Item>{item}</List.Item>}
//             />
//           </Panel>
//           <Panel
//             header={
//               <Typography
//                 style={{
//                   paddingBlock: '0.7rem',
//                   fontWeight: 500,
//                   fontSize: 17
//                 }}
//               >
//                 Maintainance Forms
//               </Typography>
//             }
//             key='5'
//           >
//             <List
//               size='large'
//               dataSource={data}
//               renderItem={item => <List.Item>{item}</List.Item>}
//             />
//           </Panel>
//           <Panel
//             header={
//               <Typography
//                 style={{
//                   paddingBlock: '0.7rem',
//                   fontWeight: 500,
//                   fontSize: 17
//                 }}
//               >
//                 Miscellaneous Forms
//               </Typography>
//             }
//             key='6'
//           >
//             <List
//               size='large'
//               dataSource={data}
//               renderItem={item => <List.Item>{item}</List.Item>}
//             />
//           </Panel>
//           <Panel
//             extra={<Iconify style={{ marginTop: '1rem' }} icon='ep:setting' />}
//             header={
//               <Typography
//                 style={{
//                   paddingBlock: '0.7rem',
//                   fontWeight: 500,
//                   fontSize: 17
//                 }}
//               >
//                 Security Forms
//               </Typography>
//             }
//             key='7'
//           >
//             <List
//               size='large'
//               dataSource={data}
//               renderItem={item => <List.Item>{item}</List.Item>}
//             />
//           </Panel>
//           <Panel
//             header={
//               <Typography
//                 style={{
//                   paddingBlock: '0.7rem',
//                   fontWeight: 500,
//                   fontSize: 17
//                 }}
//               >
//                 Sports Forms
//               </Typography>
//             }
//             key='8'
//           >
//             <List
//               size='large'
//               dataSource={data}
//               renderItem={item => <List.Item>{item}</List.Item>}
//             />
//           </Panel>
// </Collapse>
