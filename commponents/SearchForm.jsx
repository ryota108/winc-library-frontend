import { Avatar } from '@mui/material'
import React, { useRef, useState } from 'react'
import { useRouter } from 'next/router';

const SearchForm = () => {
  const ref = useRef();
  const router = useRouter();

  const submitHundler = (e) => {
    e.preventDefault();
    console.log(ref.current.value);
    router.push({ pathname: "/result", query: {keyword:ref.current.value} }, "result"); 
  };

  return (
    <div className='search_wrapper'>
     <h1 className='logo'>WINC Library</h1>
      <Avatar className='user_avatar'/>
      <form onSubmit={submitHundler}>
        <input type="text" className='search_input' placeholder='Search books...' ref={ref}/>
      </form>
    </div>
  )
}

export default SearchForm