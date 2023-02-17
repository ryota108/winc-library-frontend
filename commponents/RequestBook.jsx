import React from "react";
import { Box } from "@mui/system";
import Book from "./Book";

const RequestBook = ({ imgUrl, title, author,requestDate }) => {
  return (
    <Box sx={{ marginBottom: "10%" }}>
      <Box sx={{ display: "flex" }}>
        <Book imgUrl={imgUrl} title={title} author={author} />
        <div>
          <h2 className="request_date_title">リクエスト日:{requestDate}</h2>
          <div className="category_tab">
            <p>API</p>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default RequestBook;
