import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import  "../styles/book.module.css"

const Book = ({imgUrl,title,author}) => {
  return (
    <Box className="book_wrapper">
       <img src={imgUrl} className="book"/>
       <p className='book-title'>{title}</p> 
       <p className='book-author'>{`By ${author}`}</p>
       <button variant='lent' className='book-rent_button'>Lent</button>
    </Box>
  )
}

export default Book