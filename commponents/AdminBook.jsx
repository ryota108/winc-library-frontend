import React from 'react'
import { Box } from '@mui/system'
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const AdminBook = ({imgUrl = "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/7473/9784297127473_1_3.jpg?_ex=64x64",title = "Web API:The Good Parts",author = "山田太郎",star = 4}) => {
    const enoughTitle = title.length > 10
    const enoughAuthor = author.length < 10
    const shortenTitle = title.substr(0,27);
    const shortenAuthor = author.substr(0,11);

  return (
    <Box className="adminBook_wrapper">
    <img src={imgUrl} className="admin_book" />
    <div className='adminBook_info'>
    <p className={`adminBook_title ${enoughTitle ? "long":""}`}>{`${shortenTitle}${title.length>28 ?"...":""}`}</p>
    <p className="adminBook_author">{`${shortenAuthor}${enoughAuthor?"":"..."}`}</p>
    <div className='adminBook_review_wrapper'>
    <StarOutlineIcon className='adminBook_reviewIcon'/>
    <p className='adminBook_review'>{star}/5</p>
    </div>
    </div>
  </Box>
//   貸出中　期限超過　
  )
}

export default AdminBook