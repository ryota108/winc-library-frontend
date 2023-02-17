import React from "react";
import Book from "./Book";
import { useEffect } from 'react'
import { useState } from 'react'

const image = ({keyword = "TypeScript"}) => {
  const [books,setBooks] = useState([])

  const baseURL = `https://app.rakuten.co.jp/services/api/BooksTotal/Search/20170404?applicationId=${process.env.NEXT_PUBLIC_SECRETKEY}&keyword=`
  const bookParams = keyword 
  const URL = encodeURI(baseURL+bookParams)
  const fetchBooks = async () => {
    const res = await fetch(URL);
    const data = await res.json()
    setBooks(data.Items)
  }
  

  useEffect(()=>{
    fetchBooks()
  },[keyword])

  console.log(books)


  return (
    <>
      <ul className="bookList_wrapper">
      {books?.map((book)=>(<Book imgUrl={book?.Item.mediumImageUrl} title={book?.Item.title} author={book?.Item.author} id={book?.Item.isbn} key={book?.Item.isbn}/>))}
      </ul>
    </>
  );
};

export default image;
