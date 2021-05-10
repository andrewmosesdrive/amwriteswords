import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import img from '../images/sadderSongsImg.png';
import { makeStyles } from '@material-ui/core/styles';

const cardStyle = {
    maxWidth: '100px'
}

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function NewestBook() {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <div>
                    <img src={`${img}`} alt="Sadder Songs Book Cover"></img>
                </div>

                <CardContent>

                    <Typography gutterBottom variant="h5" component="h2">
                        "Sadder Songs" out now!
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        The second book of poetry in the series is now available through Amazon. Click on this tile to check it out on Amazon!
          </Typography>
                </CardContent>
            </CardActionArea>

        </Card>
    );
}
