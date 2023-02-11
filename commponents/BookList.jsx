import React from 'react'
import Book from './Book'

const image = () => {
  const books = [
     {
    title:"test",
    image:"https://cdn-ak.f.st-hatena.com/images/fotolife/E/E869120/20220908/20220908164654.jpg"
  }, {
    title:"test",
    image:"https://cdn-ak.f.st-hatena.com/images/fotolife/E/E869120/20220908/20220908164654.jpg"
  }
]
  return (
   <>
   <ul>
    {books.map((book)=>(
      <Book title={book.title} imgUrl={book.image}/>
    )
    )}
   </ul>
   </>
  )
}

export default image