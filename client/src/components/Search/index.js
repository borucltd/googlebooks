import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Box from '@material-ui/core/Box';
import Book from "../../components/Book";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));



const Search = () => {

  const classes = useStyles();
  const [search, setSearch] = useState('');
   
  function handleSubmit(event){
    event.preventDefault();
    searchGBook(search)
  }

  function searchGBook(intitle) {
    console.log("Making backend request to talk to google.")
    API.searchGBooks(intitle)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }

  return (
    <Box  border={1} m={2} p={4} spacing={6}> 
      <Box mt={2}>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField id="outlined-basic" label="Search for the title which includes" variant="outlined" value={search} onInput={ e=>setSearch(e.target.value)}/>
          <Button type="submit" size="small" color="primary">
             Search
          </Button>
          </form> 
      </Box>   
    </Box>               
  )
};

export default Search;
