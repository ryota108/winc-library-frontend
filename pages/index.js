import { useEffect, useState } from "react"
import {Box} from "@mui/system"
import { Autocomplete, TextField } from "@mui/material"
import BookList from "../commponents/BookList"
import SearchField from "../commponents/SearchField"
import { useRouter } from "next/router";
import TabNavigation from "../commponents/TabNavigation.jsx"
import SimpleBottomNavigation from "../commponents/BottomNavigation"

export default function Home() {
  const [books,setBooks] = useState([])
  const router = useRouter();

  useEffect(()=>{
// fetch系
  },[])
  return (
    <Box >
      <SearchField/>
      <TabNavigation/>
      <BookList keyword={router.query.keyword}/>
      <SimpleBottomNavigation/>
    </Box>
  )
}