import { useEffect, useState } from "react"
import {Box} from "@mui/system"
import BookList from "../commponents/BookList"
import SearchForm from "../commponents/SearchForm"
import TabNavigation from "../commponents/TabNavigation"
import SimpleBottomNavigation from "../commponents/BottomNavigation"

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
 <SimpleBottomNavigation/>
    </Box>
  )
}
