import { Box, width } from "@mui/system";
import React from "react";
import Book from "./Book";

const BorrowedBook = ({ imgUrl, title, author }) => {
    return (
      <>
        <Book imgUrl={imgUrl} title={title} author={author}/>
        <p>借りた日：2023/2/2</p>
        <Box>
          <p>返却日</p>
          <p>2023/2/23</p>
        </Box>
        <Box>
          <p>返却まで残り</p>
          <p>3日</p>
        </Box>
        <Box>
          <p>延長回数</p>
          <p>2回済</p>
        </Box>
      </>
    );
  };
  
  export default BorrowedBook;