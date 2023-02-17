import { Box } from "@mui/system";
import React from "react";
import Book from "./Book";
import Grid from '@mui/material/Grid';

const BorrowedBook = ({ imgUrl, title, author }) => {
  return (
    <>
      <Book imgUrl={imgUrl} title={title} author={author}/>
      <p>借りた日：2023/2/2</p>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box sx={{ textAlign: "center" }}>
            <p>返却日</p>
            <p>2023/2/23</p>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ textAlign: "center" }}>
            <p>返却まで</p>
            <p>残り3日</p>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ textAlign: "center" }}>
            <p>延長回数</p>
            <p>2回済</p>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
  
  export default BorrowedBook;