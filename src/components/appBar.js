import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import img from '../images/logo.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color: 'black'
  },
  navBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none'
  },
  image: {
    height: '5rem'
  }

}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navBar}>
        <Toolbar>
          <Typography variant="h3" className={classes.title}>
            amwriteswords
          </Typography>
          <div >
            <img src={img} alt="logo" className={classes.image} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
