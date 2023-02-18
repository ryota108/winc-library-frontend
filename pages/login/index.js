import { TextField, Button, Typography, IconButton, Link } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState,useRef } from "react";
import { LoadingButton } from "@mui/lab";
import { useRecoilState } from "recoil";
import { userState } from "../../store/atom";
import { useRouter } from 'next/router'



const Login = () => {
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
    <Typography sx={{fontSize:"35px", mt:"20px", ml:"50px", pb:"5px"}}>Welcome Back</Typography> 
    <Typography sx={{fontSize:"15px", ml:"50px", mb:"30px", color:"#9c9c9c"}}>Login to continue</Typography> 
    <Box component="form" sx={{display:"flex",flexDirection:"column"}} noValidate>
      <TextField
        className="login-signup-input"
        sx={{mr:"50px",ml:"50px", "& fieldset": { border:"none" },"& label": {color:"#9c9c9c"}}}
        color="primary"
        id="email"
        type="email"
        label="email"
        name="email"
        margin="normal"
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
      <LoadingButton
        className="login-signup-button"
        sx={{mr:"50px",ml:"50px",mt:"20px", color:"#ffffff", backgroundColor:"#be9f53", textTransform: "none"}}
        color="primary"
        variant="outlined"
        onClick={submitHandler}
      >
       Log in
      </LoadingButton>
      <Link 
      href="/signup"
      className="login-signup-text"
      underline="none"
    >
      アカウントを持っていませんか？新規登録
    </Link>
    </Box>
    
      
    </>
  );
};

export default Login;