import { Alert, Box, Button, Stack, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Profile from '../Profile/Profile';
import './Login.css';
import { login, userinfo } from "../../redux/authSlice";
import { Link} from 'react-router-dom';


function Login(props) {
  const dispatch = useDispatch();
  const user=useSelector(userinfo);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(null)
  const [password, setPassword] = useState("");
 
  const submitEvent=(e)=>{
    dispatch(login({
      name:name,
      password:password,
      logedIn:true
    }))
    console.log(user.logedIn);
   
  }
  const handleChange=(e)=>{
    setName(e.target.value);
  }
  
  return (
    <div style={{ backgroundColor: "lightgreen" }}>
      <div className="alert">{open ? (<Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="success">Login Successfull</Alert>
      </Stack>) : ("")}</div>
      <div className='login'>
        <Box className="login-form">
          <h3>Login</h3>
          <TextField
            required
            id="demo-helper-text-aligned"
            label="Email"
            type='email'
            value={name}
            onChange={handleChange}
          /><br /><br />
          <TextField
            required
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            label="Password"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          /><br />
          <Button variant="contained" color="success" className='login-btn'
            onClick={submitEvent}>
            Sign In
          </Button>
        </Box>
       
      </div>
    </div>
  )
}
export default Login;
