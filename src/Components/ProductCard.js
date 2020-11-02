import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function ProductCard() {

  return (
    <Card className="productCard">
      <CardActionArea>
        <CardMedia alt="this is shoe" className="mediaImg">
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className="cardHeading">
            Lizard
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className="cardBtn">
          See More
        </Button>
      </CardActions>
    </Card>
  );
}
