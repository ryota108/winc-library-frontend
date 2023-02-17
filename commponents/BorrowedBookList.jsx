import React from "react";
import BorrowedBook from "./BorrowedBook";
import { useEffect } from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const BorrowedBookList = ({keyword = "TypeScript"}) => {
  const [borrowedBooks,setBorrowedBooks] = useState([])

  const baseURL = `https://app.rakuten.co.jp/services/api/BooksTotal/Search/20170404?applicationId=${process.env.NEXT_PUBLIC_SECRETKEY}&keyword=`
  const bookParams = keyword 
  const URL = encodeURI(baseURL+bookParams)
  const fetchBorrowedBooks = async () => {
    const res = await fetch(URL);
    const data = await res.json()
    setBorrowedBooks(data.Items)
  }
  

  useEffect(()=>{
    fetchBorrowedBooks()
  },[keyword])

  console.log(borrowedBooks)

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="借りている本(3)" {...a11yProps(0)} />
            <Tab label="リクエストした本" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <ul className="bookList_wrapper">
          {borrowedBooks?.map((borrowedBook)=>(<BorrowedBook imgUrl={borrowedBook?.Item.mediumImageUrl} title={borrowedBook?.Item.title} author={borrowedBook?.Item.author}/>))}
          </ul>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <p>リクエストした本の一覧</p>
        </TabPanel>
      </Box>
    </>
  );
};

export default BorrowedBookList;
