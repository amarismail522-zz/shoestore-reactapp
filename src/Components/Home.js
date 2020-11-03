import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Divider, Grid, Container } from '@material-ui/core';
import ProductCard from './ProductCard';

import Shoes from '../store.json';


export default function Home() {
    return (
        <div>
            <div className="bannerSection">
                <div className="overlay">
                    <div className="bannerSectionText">
                        <h1>Any day is a perfect day for
                            <br />shoe shopping!</h1>
                        <br />
                        <Link to="/product">
                            <Button className="bannerBtn">See More</Button>
                        </Link>

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
                </div>
            </Container>


        </div>

    )
}
