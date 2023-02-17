import React from "react";
import Book from "./Book";
import { Box } from "@mui/system";

const RentalBook = ({
  imgUrl,
  title,
  author,
  rentalDate,
  rentalTimeLimit,
  rentalRemain,
  rentalLimit,
}) => {
  return (
    <Box sx={{marginBottom:"10%"}}>
      <Box sx={{ display: "flex" }}>
        <Book imgUrl={imgUrl} title={title} author={author} />
        <div>
          <h2 className="rental_date_title">借りた日:{rentalLimit}</h2>
          <div className="category_tab">
            <p>API</p>
          </div>
          <Box sx={{marginLeft:"-25%"}}>
          <p className="rental_rule">基本の貸し出し期間:1週間</p>
          <p className="rental_rule">延長回数:2回まで</p>
          </Box>
        </div>
      </Box>
      <Box sx={{ display: "flex" }}>
        <div className="rental_info_wrapper">
          <p className="rental_info_title">返却日</p>
          <p className="rental_info_data">{rentalDate}</p>
        </div>
        <div className="rental_info_wrapper">
          <p className="rental_info_title">返却まで残り</p>
          <p className="rental_info_data">{`${rentalRemain}日`}</p>
        </div>
        <div className="rental_info_wrapper">
          <p className="rental_info_title">延長回数</p>
          <p className="rental_info_data">{`${rentalTimeLimit}回済`}</p>
        </div>
      </Box>
    </Box>
  );
};

export default RentalBook;
