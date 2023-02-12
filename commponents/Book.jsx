import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../styles/book.module.css";

const Book = ({ imgUrl, title, author }) => {
  const enoughTitle = title.length < 10
  const enoughAuthor = author.length < 10
  const shortenTitle = title.substr(0,9);
  const shortenAuthor = author.substr(0,9);
  return (
    <Box className="book_wrapper">
      <img src={imgUrl} className="book" />
      <p className="book-title">{`${shortenTitle}${enoughTitle?"":"..."}`}</p>
      <p className="book-author">{`By ${shortenAuthor}${enoughAuthor?"":"..."}`}</p>
      <button variant="lent" className="book-rent_button">
        Lent
      </button>
    </Box>
  );
};

export default Book;
