import React from "react";
import SimpleBottomNavigation from "../../commponents/BottomNavigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Book from "../../commponents/Book";
import { Box } from "@mui/system";
import { useRouter } from 'next/router'

const index = () => {
    const router = useRouter()
  return (
    <div>
      <ArrowBackIcon size="30px" className="arrowBack" onClick={() => router.back()}/>
      <h1 className='adminPage_title'>お気に入りした本</h1>
      <Box sx={{marginTop:"10%",display:"flex",marginLeft:"10%"}}>
      <Book imgUrl="https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/7473/9784297127473_1_3.jpg?_ex=120x120"
          title="Web API:The Good Parts"
          author="山田太郎"/>
      <Book imgUrl="https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/7473/9784297127473_1_3.jpg?_ex=120x120"
          title="Web API:The Good Parts"
          author="山田太郎"/>
      </Box>
      <SimpleBottomNavigation />
    </div>
  );
};

export default index;
