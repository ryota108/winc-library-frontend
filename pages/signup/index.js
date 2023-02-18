import { TextField, Button, Typography, IconButton, Link } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { LoadingButton } from "@mui/lab";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useRecoilState } from "recoil";
import { userState } from "../../store/atom";
import { useRouter } from 'next/router'

const index = () => {
  const [user, setUser] = useRecoilState(userState);
  const [userName,setUserName] = useState("")
  const [email,setEmail] = useState("")
  const router = useRouter()

  
  const userNameHandler = (e) => {
    setUserName(e.target.value)
  }
  const emailHandler = (e) => {
    setEmail(e.target.value)
  }
 
  const submitHandler = () =>{
    setUser({userName:userName,emailAddress:email,isLogin:true})
    router.push("/")
  }

  return (
    <>
      <Typography sx={{fontSize:"35px", mt:"20px", ml:"50px", pb:"5px"}}>Hi There!</Typography> 
      <Typography sx={{fontSize:"15px", ml:"50px", mb:"30px", color:"#9c9c9c"}}>Create your new account</Typography>
      <Box component="form" sx={{display:"flex",flexDirection:"column"}} noValidate>
        <TextField
          className="login-signup-input"
          sx={{mr:"50px",ml:"50px", "& fieldset": { border: "none" },"& label": {color: "#9c9c9c"}}}
          id="email"
          label="Email"
          margin="normal"
          name="email"
          size="small"
          required
          onChange={emailHandler}
        />
         <TextField
              className="login-signup-input"
              sx={{mr:"50px",ml:"50px", "& fieldset": { border: "none" },"& label": {color: "#9c9c9c"}}}
              id="userName"
              label="userName"
              margin="normal"
              name="userName"
              size="small"
              required
              onChange={userNameHandler}
            />
        <TextField
          InputProps={{
            endAdornment: (
              <IconButton aria-label="visibility">
                <VisibilityIcon sx={{fontSize:"20px", color:"#d3c5a8"}}/>
              </IconButton>
            ),
          }}
          className="login-signup-input"
          sx={{mr:"50px",ml:"50px", "& fieldset": { border:"none" },"& label": {color:"#9c9c9c"}}}
          id="password"
          type="password"
          label="Password"
          name="password"
          margin="normal"
          size="small"
          required
        />
        <LoadingButton
          className="login-signup-button"
          sx={{mr:"50px",ml:"50px",mt:"20px", color:"#ffffff", backgroundColor:"#be9f53", textTransform: "none"}}
          color="primary"
          variant="outlined"
          onClick={submitHandler}
        >
          Sign up
        </LoadingButton>
      </Box>
      <Link
        href="/login"
        className="login-signup-text"
        underline="none"
      >
        既にアカウントをお持ちですか？ログイン
      </Link>
    </>
  );
};

export default index;