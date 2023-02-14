import { TextField, Button, Typography, IconButton, Link } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { LoadingButton } from "@mui/lab";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VisibilityIcon from '@mui/icons-material/Visibility';

const index = () => {
//   const [usernameErrText, setUsernameErrText] = useState("");
//   const [passwordErrText, setPasswordErrText] = useState("");
//   const [isLoading,setIsLoading] = useState(false)

//   const submitHandler = async (e) =>{
//     e.preventDefault()
//     setUsernameErrText("");
//     setPasswordErrText("");

//     const data = new FormData(e.target);
//     const username = data.get("username").trim();
//     const password = data.get("password").trim();

//     let error = false;
 

//    if(username === "") {
//     error= true
//     setUsernameErrText("名前を入力してください");
//    } if(password === "") {
//     error= true
//     setPasswordErrText("パスワードを入力してください");
//    }

//    if(error) return;

//    setIsLoading(true)

  return (
    <>
      <IconButton aria-label="back" sx={{mt:"20px", ml:"20px"}}>
        <ArrowBackIcon fontSize="large" sx={{color:"#000000"}}/>
      </IconButton>
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
          type="submit"
          color="primary"
          variant="outlined"
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