import React from 'react'
import { useParams } from 'react-router-dom';
import Shoes from '../store.json';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core/';
import ProductCard from './ProductCard';


export default function ProductItem() {
    const { id } = useParams();
    const shoe = Shoes[id];

    return (
        <div>
            <Container style={{ marginTop: "37px" }}>
                <Card className="_ProductCard" >
                    <CardActionArea>
                        <div className="subCard">
                            <CardMedia alt="this is shoe" className="_mediaImg">
                                <img src={shoe.image} alt={shoe.name} className="_mediaImg" />
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" className="_cardHeading">
                                    ${shoe.price}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="h3" className="_cardHeading">
                                    {shoe.name}
                                </Typography>
                            </CardContent>
                        </div>

                    </CardActionArea>
                </Card>
            </Container>

        </div>
    )
}
