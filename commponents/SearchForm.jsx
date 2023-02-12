import { Avatar } from '@mui/material'
import React from 'react'


const SearchForm = () => {



  return (
    <div className='search_wrapper'>
     <h1 className='logo'>WINC Library</h1>
      <Avatar className='user_avatar'/>
      <input className='search_input' placeholder='Search books...'/>
      </div>
  )
}

export default SearchForm