import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const View = () => {
    const [data,setdata] = useState([])
    const navigate = useNavigate()
    axios.get("http://localhost:3011/view")
    .then((res) => {
        setdata(res.data)
    })

    const delValue = (id) => {
        axios.delete("http://localhost:3011/remove/" + id)
        .then ((res) => {
            alert(res.data.message)
            window.location.reload()
        })
    }

    const updateValue = (val) => {
        navigate("/add",{state: {val} })
    }

  return (
    <div>
        <br /><br /><br /><br />
        <h1>DISPLAY ALL ITEMS</h1>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align='right'>Name</TableCell>
                        <TableCell align='right'>Details</TableCell>
                        <TableCell align='right'>Price</TableCell>
                        <TableCell align='right'>Type</TableCell>
                        <TableCell align='right'>Image</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {data.map((val) => {
                        return(
                            <TableRow>
                                <TableCell align='right'>{val.Name}</TableCell>
                                <TableCell align='right'>{val.Details}</TableCell>
                                <TableCell align='right'>{val.Price}</TableCell>
                                <TableCell align='right'>{val.Cat}</TableCell>
                                <TableCell align='right'>{val.Image}</TableCell>
                                <TableCell align='right'>
                                    <Button variant='contained' color = 'success' onClick = {() => updateValue(val)}>Update</Button>
                                    <Button variant='contained' color = 'error' onClick = {() => delValue(val._id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default View
