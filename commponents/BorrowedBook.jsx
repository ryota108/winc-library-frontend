import React from "react";
import Book from "./Book";

const BorrowedBook = ({ imgUrl, title, author }) => {
    return (
      <Book imgUrl={imgUrl} title={title} author={author}/>
    );
  };
  
  export default BorrowedBook;