import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));
  
const Search = () => {

  const classes = useStyles()
  const [books, setBooks] = useState([])
  const [phrase, setPhrase] = useState('')
  
   
  

  function handleSubmit(event){
    event.preventDefault();
    searchGBook(phrase)
  }

  function searchGBook(phrase) {
    console.log("Making backend request to Google.")
    API.searchGBooks(phrase)
    .then(res =>{ 
      console.log(typeof res.data)    
      if (typeof res.data === 'string') {
        setBooks([])        
      } else {
        if (res.data.items.length === 0 || typeof res.data.items === 'undefined') {
          setBooks([])
        } else {
          const newBooks = normalization(res.data.items)
          setBooks(newBooks)
        }
      }
    })
    .catch(err => console.log(err))
  }

  // saves a book to the database
  function saveBook(id) {
  
    console.log("Making request to backend, save book number: " + id)
    //console.log(JSON.stringify(books[id]))
    API.saveBook(books[id])
    .then( res => {
      // remove a book, terrible way
      const removedBook = books.splice(id,1)
      setBooks([])
      setBooks(books)
      console.log("SAVED")
    })
    .catch(err => console.log(err))
  }

  // here we change objects from google API to match mongo model
  function normalization(inputBooks) {

    const keys = [
      'title',
      'authors',
      'thumbnail',
      'previewLink',
      'textSnippet']

    const outputBooks = inputBooks.map((item) => {

        let book = {}
           
        keys.forEach((key) => {

          switch(key) {

            case 'title':
              typeof item.volumeInfo[key] !== 'undefined' ? book.title = item.volumeInfo[key] : book.title = "Unknown"
              break;

            case 'authors':
              typeof item.volumeInfo[key] !== 'undefined' ? book.authors = item.volumeInfo[key] : book.authors = ["Unknown"]
              break;

            case 'thumbnail':
              if (typeof item.volumeInfo.imageLinks !== 'undefined')  {
                typeof item.volumeInfo.imageLinks[key] !== 'undefined' ? book.image = item.volumeInfo.imageLinks[key] : book.image = "Unknown"
              } else {
                book.description = "Unknown"
              }
              break;

            case 'previewLink':
              typeof item.volumeInfo[key] !== 'undefined' ? book.link = item.volumeInfo[key] : book.link = "Unknown"
              break;

            case 'textSnippet':
              if (typeof item.searchInfo !== 'undefined')  {
                typeof item.searchInfo[key] !== 'undefined' ? book.description = item.searchInfo[key] : book.description = "Unknown"
              } else {
                book.description = "Unknown"
              }
              break;
            default:
              console.log("Unknown key")
              break;
          }
        }
        )
          return book
      })
      return outputBooks
    }
    
  

  // conditional rendering based on the number of books in books array
  if (books.length === 0 ) {

    console.log(`There are ${books.length} books.`)
    return (
    <Box  border={1} m={2} p={4} spacing={6}> 
      <Box mt={2}>
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField id="outlined-basic" label="Search for the title which includes" variant="outlined"  onInput={ e=>setPhrase(e.target.value)}/>
            <Button type="submit" size="small" color="primary">
              Search
            </Button>
        </form>
      </Box>
    </Box>
    )

  } else {

    console.log(`There are ${books.length} books.`)
    return (
      <Box  border={1} m={2} p={4} spacing={6}> 
        <Box mt={2}>
          <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="Search for the title which includes" variant="outlined"  onInput={ e=>setPhrase(e.target.value)}/>
              <Button type="submit" size="small" color="primary">
                Search
              </Button>
          </form>
                     
          { books.map((book,index) => {
          return (
            <Box mt={2} key={index}>
              <Card>
                <CardActionArea>
                  <CardMedia title={book.title}>
                  <img src={book.image}  width="50"  height="50" alt="Can't download"/>
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
                    <a href={book.link} target="_blank" style={{textDecoration: "none"}} rel="noopener noreferrer">
                      View
                    </a>
                  </Button>
                  <Button size="small" color="primary"  >
                    <span  disabled onClick={(event) => {
                      event.preventDefault()
                      saveBook(index)

                      }}>
                      Save 
                    </span>
                  </Button>
                </CardActions>
              </Card>        
              </Box>   
            )}
          )}
        </Box>
      </Box>               
    )
  }
};

export default Search;
