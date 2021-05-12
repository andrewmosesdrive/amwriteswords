import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 500,
    }
})

export default function AboutMe() {
  const classes = useStyles()
  
    return (
    <div className={classes.root}>
      <Typography variant='h1' component='h2' gutterBottom>
          asdfasdfasdafsdfa
      </Typography>
    </div>
  );
}
