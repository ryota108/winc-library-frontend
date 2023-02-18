import { Button, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../styles/book.module.css";
import Link from "next/link";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Book = ({ imgUrl, title, author,id = 9784297127473 }) => {
  const enoughTitle = title?.length > 10;
  const enoughAuthor = author?.length < 10;
  const shortenTitle = title?.substr(0, 27);
  const shortenAuthor = author?.substr(0, 11);
  return (
    <Box className="book_wrapper">
        <Link href={`/detail/${id}`}>
        <img src={imgUrl} className="book" />
        <p
          className={`book-title ${enoughTitle ? "long" : ""}`}
        >{`${shortenTitle}${title.length > 28 ? "..." : ""}`}</p>
        <p className="book-author">{`${shortenAuthor}${
          enoughAuthor ? "" : "..."
        }`}</p>
    </Link>
      </Box>
  );
};

export default Book;
