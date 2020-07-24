import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';








const BookCard = (props) => {

  function handleDelete(event) {
    event.preventDefault()

    const removeId = event.target.dataset.remove
    console.log(removeId)


  }



  return (
    <Box mt={2} label={props.remove}>
    <Card>
      <CardActionArea>
        <CardMedia
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            Written by {props.authors.join(", ")}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View
        </Button>
        
        <Button size="small" color="primary">
          <span data-remove={props.remove}  onClick={handleDelete}>
            Delete 
          </span>
        </Button>
        
      </CardActions>
    </Card>
    </Box>
    
  );
};

export default BookCard;
