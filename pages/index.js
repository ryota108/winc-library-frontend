import { useEffect, useState } from "react"
import {Box} from "@mui/system"
export default function Home() {
  const [books,setBooks] = useState([])
  useEffect(()=>{
// fetch系
  },[])
  return (
    <Box >
      <h1>TOPページです</h1>
    </Box>
  )
}
