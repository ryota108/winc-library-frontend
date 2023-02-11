import { useEffect, useState } from "react"
import {Box} from "@mui/system"
import { RouterProvider } from "react-router-dom"
import { Autocomplete, TextField } from "@mui/material"
import BookList from "../commponents/BookList"

export default function Home() {
  const [books,setBooks] = useState([])
  useEffect(()=>{
// fetch系
  },[])
  return (
    <Box >
     <h1>TOPページです</h1>
      <Autocomplete
  disablePortal
  id="combo-box-demo"
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="search Books" />}
/>
<BookList/>
    </Box>
  )
}
