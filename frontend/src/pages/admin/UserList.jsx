import { Paper, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminUserAction, updateUserStatusAction } from '../../redux/admin/action/adminUserAction'
import { AdminUsers, getAdminUsers } from '../../redux/admin/reducer/adminUserReducer'
import axios from 'axios'
import useDebounce from '../../hooks/useDebounce'
import useDesrialize from '../../hooks/useDesrialize'

function UserList() {
  const { users, toggle } = useSelector(AdminUsers)
  const dispatch = useDispatch()
  const [inp, setInp] = useState("")
  ////////////cousmon hook////////////////
  const [x, setX] = useState({
    name: "arti", age: 20
  })
  const dd = useDesrialize(x)
  ////////////////////////////

  ///////////////// debouncing//////////////////

  const featchUser = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/employee/search", {
        params: {
          term: inp
        }
      })
      console.log(data);

    } catch (error) {
      console.log(error);
    }
  }

  const debounceValue = useDebounce(inp, 2000)
  useEffect(() => {
    featchUser()
  }, [debounceValue])
  ////////////////debouncing end//////////////////////

  useEffect(() => {
    dispatch(getAdminUserAction())
  }, [toggle])

  return <>
    {/* {dd} */}
    <input type="text" onChange={e => setInp(e.target.value)} />
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>User Name</TableCell>
            <TableCell align="right">User Email</TableCell>
            <TableCell align="right">User Contact</TableCell>
            <TableCell align="right">Active</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((item) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="right">{item.email}</TableCell>
              <TableCell align="right">{item.mobile}</TableCell>
              <TableCell align="right">
                <Switch
                  checked={item.active}
                  onChange={e =>
                    dispatch(updateUserStatusAction({ ...item, active: e.target.checked }))}

                  inputProps={{ 'aria-label': 'controlled' }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


  </>
}

export default UserList