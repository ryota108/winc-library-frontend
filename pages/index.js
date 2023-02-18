import { useEffect, useState } from "react"
import {Box} from "@mui/system"
import { Autocomplete, TextField } from "@mui/material"
import BookList from "../commponents/BookList"
import SearchForm from "../commponents/SearchForm"
import { useRouter } from "next/router";
import Router from 'next/router'
import TabNavigation from "../commponents/TabNavigation.jsx"
import SimpleBottomNavigation from "../commponents/BottomNavigation"
import { useRecoilState } from "recoil";
import { userState } from "../store/atom";

export default function Home() {
  const router = useRouter();
  const [user,setUser] = useRecoilState(userState)

  useEffect(()=>{
   if(typeof user.isLogin === "undefined"){
    // Router.push("/login")
   }
  },[])
  return (
    <Box >
      <SearchForm/>
      <TabNavigation/>
      <BookList keyword={router.query.keyword}/>
      <SimpleBottomNavigation/>
    </Box>
  )
}