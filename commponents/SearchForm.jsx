import { TextField } from '@mui/material'
import React, { useRef} from 'react'
import { useRouter } from 'next/router';
import SearchIcon from '@mui/icons-material/Search';

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
     <h1 className='logo'>Pocket Library</h1>
      <form onSubmit={submitHundler}>
        <TextField 
          InputProps={{
            endAdornment: (
              <SearchIcon sx={{fontSize:"20px", color:"#9c9c9c"}}/>  
            ),
          }}
          sx={{"& fieldset": { border:"none" }}}
          className='search_input' 
          placeholder='Search books...' 
          inputRef={ref}/>
      </form>
    </div>
  )
}

export default SearchForm