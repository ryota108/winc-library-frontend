import { useEffect, useState } from "react"
import BorrowedBookList from "../../commponents/BorrowedBookList";
import SimpleBottomNavigation from "../../commponents/BottomNavigation"
import { useRouter } from "next/router";
import { Box } from "@mui/system";

const MyPage = () => {
  const [borrowedBooks,setBorrowedBooks] = useState([])
  const router = useRouter();

  useEffect(()=>{
// fetch系
  },[])

  return (
    <>
      <Box>
        <BorrowedBookList keyword={router.query.keyword}/>
        <SimpleBottomNavigation/>
      </Box>
    </>
  );
};

export default MyPage;