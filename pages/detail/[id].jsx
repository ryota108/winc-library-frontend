import {  Button, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import Link from "next/link";


const Detail = ({data}) => {
  const [isFavorite,setIsFavorite] = useState(false)
  const [isRental,setIsRental] = useState(false)
  const favoriteHandler = () => {
    setIsFavorite((prev)=>{setIsFavorite(!prev)})
  }
  const RentalHandler = () => {
      setIsRental(true)
    }
    const detail = data?.Items[0].Item
    console.log(data)
    
    return (
        <Box className="detail-wrapper">
      {isFavorite ? <FavoriteIcon className="book_detail_favorite" onClick={favoriteHandler}/> : <FavoriteBorderIcon className="book_detail_favorite not_favorite" onClick={favoriteHandler}/> }
      <IconButton aria-label="back" sx={{mt:"20px", ml:"20px"}}>
        <Link href="/">
        <ArrowBackIcon fontSize="small" sx={{color:"#000000"}} />
        </Link>
      </IconButton>
      <img src={detail?.largeImageUrl} className="detail-image"/>
      <p className="book-detail_title">{detail?.title}</p> 
      <Box sx={{ display: "flex" }}>
        <div className="detail_info_wrapper">
          <p className="detail_info_title">値段</p>
          <p className="detail_info_data">{detail?.itemPrice}円</p>
        </div>
        <div className="detail_info_wrapper">
          <p className="detail_info_title">リクエスト数</p>
          <p className="detail_info_data">（2）</p>
        </div>
        <div className="detail_info_wrapper">
          <p className="detail_info_title">評価</p>
          <p className="detail_info_data">{detail?.reviewAverage}/5</p>
        </div>
      </Box>
      <Box>
        <p className="detail_description"> {detail?.itemCaption}</p> 
      </Box>
      <Box>
        <ul>
          <li className="detail_book_data">著者 : {detail?.author}</li>
          <li className="detail_book_data">出版社 :  {detail?.publisherName}</li>
          <li className="detail_book_data">ISBN-10 : {detail?.isbn}</li>
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

export async function getServerSideProps(context) {
    const baseURL = `https://app.rakuten.co.jp/services/api/BooksTotal/Search/20170404?applicationId=${process.env.NEXT_PUBLIC_SECRETKEY}`
    const id = context.params.id;
    const res = await fetch(baseURL+"&isbnjan=" + id);
    const data = await res.json();
    return {
        props: {
            data,
        },
    };
  }

export default Detail;