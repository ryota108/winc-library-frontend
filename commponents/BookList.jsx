import React from "react";
import Book from "./Book";

const image = () => {
  const books = [
    {
      title: "Test",
      image:
        "https://m.media-amazon.com/images/I/81DuhehbGJL.jpg",
      author: "Ryota Kodama",
    },
    {
      title: "Test",
      image:
        "https://www.oreilly.co.jp/books/images/picture_large978-4-87311-893-2.jpeg",
      author: "Ryota Kodama",
    },
    {
      title: "Test",
      image:
        "https://m.media-amazon.com/images/I/81APAg5DutL.jpg",
      author: "Ryota Kodama",
    },
    {
      title: "Test",
      image:
        "https://m.media-amazon.com/images/I/51OSBZvAxGL.jpg",
      author: "Ryota Kodama",
    },
    {
      title: "Test",
      image:
        "https://cdn-ak.f.st-hatena.com/images/fotolife/E/E869120/20220908/20220908164654.jpg",
      author: "Ryota Kodama",
    },
    {
      title: "Test",
      image:
        "https://m.media-amazon.com/images/I/91iQh271SHL.jpg",
      author: "Ryota Kodama",
    },
  ];
  return (
    <>
      <ul className="bookList_wrapper">
        {books.map((book,index) => (
          <Book title={book.title} imgUrl={book.image} author={book.author} key={index} />
        ))}
      </ul>
    </>
  );
};

export default image;
