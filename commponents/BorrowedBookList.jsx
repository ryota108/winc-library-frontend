import React from "react";
import BorrowedBook from "./BorrowedBook";
import { useEffect } from 'react'
import { useState } from 'react'

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


  return (
    <>
      <p>借りている本(3), リクエストした本</p>
      <ul className="bookList_wrapper">
      {borrowedBooks?.map((borrowedBook)=>(<BorrowedBook imgUrl={borrowedBook?.Item.mediumImageUrl} title={borrowedBook?.Item.title} author={borrowedBook?.Item.author}/>))}
      </ul>
    </>
  );
};

export default BorrowedBookList;
