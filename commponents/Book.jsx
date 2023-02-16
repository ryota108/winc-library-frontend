import { Button, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../styles/book.module.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

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
      <IconButton className="book-favorite_button">
        <FavoriteBorderIcon sx={{fontSize:"15px"}}/>
      </ IconButton>
    </Box>
  );
};

export default Book;
