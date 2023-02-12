import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../styles/book.module.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Book = ({ imgUrl, title, author,id }) => {
  const enoughTitle = title.length < 10
  const enoughAuthor = author.length < 10
  const shortenTitle = title.substr(0,9);
  const shortenAuthor = author.substr(0,9);
  return (
    <Box className="book_wrapper">
      <img src={imgUrl} className="book" />
      <p className="book-title">{`${shortenTitle}${enoughTitle?"":"..."}`}</p>
      <p className="book-author">{` ${shortenAuthor}${enoughAuthor?"":"..."}`}</p>
      <p className="book-isbn">{id}</p>
      <FavoriteBorderIcon className="book-favorite"/>
    </Box>
  );
};

export default Book;
