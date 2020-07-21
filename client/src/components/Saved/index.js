import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Box from '@material-ui/core/Box';
import Book from "../../components/Book";



const Saved = () => {

  const [books, setBooks] = useState([])

  useEffect(() => {
    API.searchBooks()
    .then(response => {
      const allBooks = []
      response.data.forEach(item => {
        allBooks.push(item)
      })
      setBooks(allBooks)
      console.log(allBooks)
    })
    .catch(err => console.log(err))
  }, []);                                            
   
  return (
    <Box border={1} m={2} p={4} spacing={6}>
      {books.map((item,index) =>
      <Book key={index} title={item.title} description={item.description} authors={item.authors} />
      )}
    </Box>               
  )
};

export default Saved;
