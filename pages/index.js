import { useEffect, useState } from "react"
import {Box} from "@mui/system"
import { Autocomplete, TextField } from "@mui/material"
import BookList from "../commponents/BookList"
import SearchForm from "../commponents/SearchForm"
import TabNavigation from "../commponents/TabNavigation"

export default function Home() {
  const [books,setBooks] = useState([])
  useEffect(()=>{
// fetch系
  },[])
  return (
    <Box >
      <SearchForm/>
      <TabNavigation/>
<BookList/>
    </Box>
  )
}
