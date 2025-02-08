import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Button, IconButton, TextField, Toolbar } from '@mui/material';
import './Navbar.css'
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
        return (
    <div>
        <AppBar sx={{ backgroundColor: "#ebecf1" }}>
            <div className='area1'>
                <Toolbar>
                    <div>
                        <TextField variant='outlined' size='small' sx={{backgroundColor:'white', color:'black', minWidth:'100px', width:'200px'}}></TextField>
                        <Button sx={{backgroundColor:'#222222', height:'40px'}}>🔍</Button>
                    </div>
                </Toolbar>
            </div>
            <div className='area2'>
                <Toolbar sx={{ minHeight: '1px', height: '1px', padding: 0, backgroundColor: '#222222'}}>
                    <Link to = '/home'>
                        <Button variant='text' sx={{color: 'white','&:hover':{backgroundColor:'white',color:'black'}}}>Home</Button>
                    </Link>

                    <Link to = '/view'>
                        <Button variant='text' sx={{color: 'white','&:hover':{backgroundColor:'white',color:'black'}}}>View</Button>
                    </Link>
                    <Link to ='/add'>
                        <Button variant='text' sx={{color: 'white','&:hover':{backgroundColor:'white',color:'black'}}}>Sell</Button>
                    </Link>
                </Toolbar>
            </div>
        </AppBar>
        <br /><br />
    </div>
  )
}

export default AdminNavbar