import React from 'react'
import { Button, Divider, Grid, Container } from '@material-ui/core';
import ProductCard from './ProductCard';



export default function Home() {
    return (
        <div>
            <div className="bannerSection">
                <div className="overlay">
                    <div className="bannerSectionText">
                        <h1>Any day is a perfect day for
                            <br />shoe shopping!</h1>
                        <br />
                        <Button className="bannerBtn">See More</Button>
                    </div>
                </div>
            </div>
            <Container>
                <div>
                    <div className="homeText">
                        <h1>Latest Products</h1>
                        <Divider className="divider" />
                    </div>
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
