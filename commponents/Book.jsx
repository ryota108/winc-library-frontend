import { Box } from '@mui/system'
import React from 'react'

const Book = ({imgUrl,title}) => {
  return (
    <Box>
       <img src={imgUrl}/>
       <h1>{title}</h1> 
    </Box>
  )
}

export default Book