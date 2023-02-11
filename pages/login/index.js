import { TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { LoadingButton } from "@mui/lab";
import Link from 'next/link'

const Login = () => {
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
    <Box component="form" sx={{display:"flex",flexDirection:"column"}} noValidate>
      <TextField
        sx={{mr:"50px",ml:"50px"}}
        id="username"
        label="お名前"
        margin="normal"
        name="username"
        required
      />
      <TextField
        sx={{mr:"50px",ml:"50px"}}
        id="password"
        type="password"
        label="パスワード"
        name="password"
        margin="normal"
        required
      />
      <LoadingButton
           sx={{mr:"50px",ml:"50px",mt:"20px"}}
        type="submit"
        color="primary"
        variant="outlined"
      >
       ログイン
      </LoadingButton>
    </Box>
      <Link href="/signup">アカウントを持っていませんか？新規登録</Link>
      
    </>
  );
};

export default Login;