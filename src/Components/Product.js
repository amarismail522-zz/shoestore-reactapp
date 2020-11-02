import React from 'react'

import { Button, Divider, Grid, Container } from '@material-ui/core';
import ProductCard from './ProductCard';

export default function Product() {
    return (
        <div className="product">
            <div className="productHeading">
                <h1>Fresh Products</h1>
                <Divider className="divider" />
            </div>
            <Container>
                <div>
                    {/* <div className="homeText">
                        <h1>Latest Products</h1>
                        <Divider className="divider" />
                    </div> */}
                    <div className="productSection">
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={4}>
                                <ProductCard />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <ProductCard />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <ProductCard />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <ProductCard />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <ProductCard />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <ProductCard />
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Container>


        </div>


    )
}
