import { TextField, Button, Typography, IconButton, Link } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Image from 'next/image'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';


const Detail = () => {
  const [isFavorite,setIsFavorite] = useState(false)
  const [isRental,setIsRental] = useState(false)
  const favoriteHandler = () => {
    setIsFavorite((prev)=>{setIsFavorite(!prev)})
  }
  const RentalHandler = () => {
    setIsRental(true)
  }

  return (
    <Box className="detail-wrapper">
      {isFavorite ? <FavoriteIcon className="book_detail_favorite" onClick={favoriteHandler}/> : <FavoriteBorderIcon className="book_detail_favorite not_favorite" onClick={favoriteHandler}/> }
      <IconButton aria-label="back" sx={{mt:"20px", ml:"20px"}}>
        <ArrowBackIcon fontSize="small" sx={{color:"#000000"}}/>
      </IconButton>
      <img src="https://m.media-amazon.com/images/I/616AVqqSP1L._AC_SS260_.jpg" className="detail-image"/>
      <p className="book-detail_title">Python入門</p> 
      <Box sx={{ display: "flex" }}>
        <div className="detail_info_wrapper">
          <p className="detail_info_title">値段</p>
          <p className="detail_info_data">2240円</p>
        </div>
        <div className="detail_info_wrapper">
          <p className="detail_info_title">リクエスト数</p>
          <p className="detail_info_data">（2）</p>
        </div>
        <div className="detail_info_wrapper">
          <p className="detail_info_title">評価</p>
          <p className="detail_info_data">4/5</p>
        </div>
      </Box>
      <Box>
        <p className="detail_description">本企画は、TypeScriptをハンズオン形式で学ぶ書籍です。</p> 
      </Box>
      <Box>
        <ul>
          <li className="detail_book_data">著者 : 山田太郎</li>
          <li className="detail_book_data">出版社 : 秀和システム</li>
          <li className="detail_book_data">ISBN-10 : 4798065331</li>
        </ul>
      </Box>
      <Button
          className={`detail-button ${isRental ? "rental_clicked" : ""}`}
          onClick={RentalHandler}
          // type="submit"
          color="primary"
          variant="outlined"
        >
        <p>
        リクエストする
        </p>
      <PersonIcon/>
      </Button>
      {/* <LoadingButton
          className="detail-button"
    
          type="submit"
          color="primary"
          variant="outlined"
        >
        <p>
        借りる
        </p>
      </LoadingButton>
      <LoadingButton
          className="detail-button"
    
          type="submit"
          color="primary"
          variant="outlined"
        >
        <p>
        予約する
        </p>
      </LoadingButton> */}
    </Box>
  );
};

export default Detail;