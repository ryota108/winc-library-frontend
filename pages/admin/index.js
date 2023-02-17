import React from 'react'
import AdminBook from '../../commponents/AdminBook'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SimpleBottomNavigation from '../../commponents/BottomNavigation';
import Link from 'next/link';

const index = () => {
  return (
    <>
    <Link href="/">
     <ArrowBackIcon size='30px' className='arrowBack'/>
    </Link>
    <h1 className='adminPage_title'>書籍管理</h1>
    <div style={{display:"flex",flexWrap:"wrap",marginLeft:"3%",marginTop:"15%"}}>
    <AdminBook/>
    <AdminBook/> 
    <AdminBook/> 
    <AdminBook/> 
    <AdminBook/> 
    <AdminBook/> 
    <AdminBook/> 
    <AdminBook/> 
    <AdminBook/> 
    <AdminBook/> 
    <AdminBook/> 
    <AdminBook/> 
    <AdminBook/> 
    <AdminBook/> 
    <AdminBook/> 
    <AdminBook/> 
    <AdminBook/> 
    <AdminBook/> 
    <AdminBook/> 
    <AdminBook/> 
    <AdminBook/> 
    <AdminBook/> 
    <AdminBook/> 
    <AdminBook/> 
    <AdminBook/> 
    <AdminBook/> 
    <AdminBook/> 
    <AdminBook/> 
    <AdminBook/> 
    <AdminBook/> 
    </div>
    <SimpleBottomNavigation/>
    </>
  )
}

export default index