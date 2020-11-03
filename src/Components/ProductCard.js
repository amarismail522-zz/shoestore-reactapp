import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function ProductCard({ shoe, keyName }) {
console.log(keyName)
  return (
    <Card className="productCard" >
      <CardActionArea>
        <CardMedia alt="this is shoe" className="mediaImg">
          <img src={shoe.image} className="mediaImg" />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className="cardHeading">
            ${shoe.price}
          </Typography>
          <Typography gutterBottom variant="h5" component="h3" className="cardHeading">
            {shoe.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link style={{textDecoration:"none"}} key={keyName} to={`/product/${keyName}`}>
          <Button className="cardBtn">
            See More
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
