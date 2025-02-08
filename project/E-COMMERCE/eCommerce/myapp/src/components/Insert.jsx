import { Button, Paper, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './Insert.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Insert = (props) => {
    var [input,setinput] = useState({Name: "", Details: "",Price: "",Cat: "",Image: ""})
    var location = useLocation()
    var navigate = useNavigate()

    //functions
    const inputHandler = (e) => {
        const value = e.target.name === "Price" ? parseFloat(e.target.value) : e.target.value;
        setinput({ ...input, [e.target.name]: value });
    };
    const addHandler = () => {
        if (location.state !== null){
            axios.put(`http://localhost:3011/update/${location.state.val._id}`, input)
            .then((res) => {
                alert(res.data.message);
                navigate("/view")
            })
        }
        else{
            axios.post("http://localhost:3011/add",input)
            .then((res) => {
                alert(res.data.message)
                navigate("/view")
            })
        }
    }

    useEffect (() => {
        if (location.state !== null){
            setinput({
                ...input,
                Name: location.state.val.Name,
                Details: location.state.val.Details,
                Price: location.state.val.Price,
                Cat: location.state.val.Cat,
                Image: location.state.val.Image
            })
        }
    },[location.state]);


  return (
    <div>
        <br /><br /><br /><br /><br />
        <Paper className='pap'>
            <div>
                <br />
                <h1>Sell Your Item</h1>
            </div>
            <br />
            <div className='content'>
                <div>
                    <Button variant='contained' disabled={true} sx={{width:'100px'}}>Name</Button>&nbsp;
                    <TextField variant='outlined' name="Name" value={input.Name} onChange={inputHandler}></TextField> 
                </div>
                <br />
                <div>
                    <Button variant='contained' disabled={true} sx={{width:'100px'}}>Details</Button>&nbsp;
                    <TextField variant='outlined' name="Details" value={input.Details} onChange={inputHandler}></TextField> 
                </div>
                <br />
                <div>
                    <Button variant='contained' disabled={true} sx={{width:'100px'}}>Price</Button>&nbsp;
                    <TextField variant='outlined' name="Price" value={input.Price} onChange={inputHandler}></TextField> 
                </div>
                <br />
                <div>
                    <Button variant='contained' disabled={true} sx={{width:'100px'}}>Type</Button>&nbsp;
                    <TextField variant='outlined' name="Cat" value={input.Cat} onChange={inputHandler}></TextField> 
                </div>
                <br />
                <div>
                    <Button variant='contained' disabled={true} sx={{width:'100px'}}>Image</Button>&nbsp;
                    <TextField variant='outlined' name="Image" value={input.Image} onChange={inputHandler}></TextField> 
                </div>
                <br />
                <div>
                    <Button variant='contained' sx={{width:'100px'}} onClick={addHandler}>Insert</Button>&nbsp;
                </div>
            </div>
        </Paper>
    </div>
  )
}

export default Insert


// http://localhost:3011/add