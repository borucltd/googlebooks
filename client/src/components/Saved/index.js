import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Box from '@material-ui/core/Box';
import Book from "../../components/Book";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Saved = () => {

  const [books, setBooks] = useState([])

  useEffect(() => {
    loadBooks()
  }, [])

  // loads all books from database
  function loadBooks() {
    console.log("Loading books from mongodb.")
    API.searchBooks()
    .then(res => {
      console.log( res.data.length)
      if (res.data.length) {
        setBooks(res.data)
      } else {
        setBooks([{
          _id: "empty",
          title: "There are no books",
          image: "https://icon-library.net/images/empty-icon/empty-icon-0.jpg",
          authors: ["Your database"],
          description: "Please click on Search and add books."
        }])
      }      
    })
    .catch(err => console.log(err))
  }  


  
  // deletes a book from the database
  function deleteBook(id) {
    console.log("Making request to backend, delete" +id)
    API.deleteBook(id)
    .then( res => loadBooks())
    .catch(err => console.log(err))
  }
   


  return (
    <Box  border={1} m={2} p={4} spacing={6}>
      {books.map((book,index) => {
        return (
          
           <Box mt={2} key={book._id}>
            <Card>
              <CardActionArea>
                <CardMedia title={book.title}>
                <img src={book.image}  width="50"  height="50" alt="picture"/>
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {book.title}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="h2">
                    Written by {book.authors.join(", ")}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {book.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <a href={book.link} target="_blank" style={{textDecoration: "none"}}>
                    View
                  </a>
                </Button>
                <Button size="small" color="primary">
                  <span   onClick={() => deleteBook(book._id)}>
                    Delete 
                  </span>
                </Button>
              </CardActions>
            </Card>        
            </Box>   
        )
        }
      )}
    </Box>               
  )
};

export default Saved;
