import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography'

const cardStyle = {
    maxWidth: '345px'
}

export default function NewestBook() {
  return (
      <Card className={cardStyle.maxWidth}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="asdfadsafs"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            "Sadder Songs" out now!
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            The second book in the anthology series of poetry is now available through Amazon
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}
