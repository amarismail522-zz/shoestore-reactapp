import React from 'react'
import { useParams } from 'react-router-dom';
import Shoes from '../store.json';
// import { Link } from 'react-router-dom';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import {Container} from '@material-ui/core/';
import ProductCard from './ProductCard';


export default function ProductItem() {
    const { id } = useParams();
    const shoe = Shoes[id];

    return (
        <div>
            <Container style={{width:"40%" , height:"auto", marginTop:"8px"}}>
            <ProductCard style={{maxWidth:"300px"}} shoe={shoe}
                keyName={id}
                key={id} idx={id} />
            </Container>
           
        </div>
    )
}
