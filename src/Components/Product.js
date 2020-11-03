import React from 'react'
import Shoes from '../store.json';

import { Divider, Grid, Container } from '@material-ui/core';
import ProductCard from './ProductCard';

export default function Product() {
    return (
        <div className="product">
            <div className="productHeading">
                <h1>Fresh Products</h1>
                <Divider className="divider" />
            </div>
            <Container>
                <div className="productSection">
                    <Grid container spacing={3}>
                        {Object.keys(Shoes).map((keyName, idx) => {
                            const shoe = Shoes[keyName];
                            return (
                                <Grid item xs={12} sm={4}>
                                    <ProductCard shoe={shoe}
                                        keyName={keyName}
                                        key={idx} idx={idx} />
                                </Grid>
                            );
                        })}
                    </Grid>
                </div>

            </Container>


        </div>


    )
}
