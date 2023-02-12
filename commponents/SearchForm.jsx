import { Avatar } from '@mui/material'
import React, { useRef } from 'react'


const SearchForm = () => {
  const ref = useRef();

  const submitHundler = (e) => {
    e.preventDefault();
    console.log(ref.current.value);
    const searchURL = "";

    //fetch data
    fetch(searchURL)
      .then((res) => {
        return res.json();
      })
      .then((bookData) => {
        setFetchData(bookData);
      });
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