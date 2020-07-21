import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";


import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';

import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


import Saved from "../components/Saved";
import Search from "../components/Search";




// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: '#757ce8',
//       main: '#3f50b5',
//       dark: '#002884',
//       contrastText: '#fff',
//     },
//     secondary: {
//       light: '#ff7961',
//       main: '#f44336',
//       dark: '#ba000d',
//       contrastText: '#000',
//     },
//   },
// });

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  links: {
    color: theme.palette.primary.contrastText,
    marginLeft: theme.spacing(2),
  }
}));


const Home = () => {

  const classes = useStyles();

    return (
      <Grid container justify="space-evenly" alignItems="center" spacing={6} >     
        <Grid item xs={10}>
          <AppBar position="static">
            <Toolbar variant='regular'>
              <Typography variant="h6" color="inherit">
                <Link className={classes.links} href="/">
                  Google Books
                </Link>
                <Link className={classes.links} href="/Search" color="inherit">
                  Search
                </Link>
                <Link className={classes.links} href="/Saved" color="inherit">
                  Saved
                </Link>
              </Typography>
            </Toolbar>
          </AppBar>  
        </Grid>
       
        <Grid item xs={8} >      
          <Typography variant="h2" color="inherit">
            (React) Google Books Search
          </Typography>
          <Typography variant="h4" color="inherit">
            Search for and Save Books of Interest
          </Typography>
        </Grid>
        
        <Grid item xs={8}>      
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Saved} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/search" component={Search} />
          </Switch>
        </BrowserRouter>         
        </Grid>
    </Grid>
    );
  };

  export default Home;

