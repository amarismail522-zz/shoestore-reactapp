import React from 'react'
import Container from '@material-ui/core/Container';
import store from '../store.json';
import { Button } from '@material-ui/core';


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
                    <div>
                        <h1>Latest Products</h1>
                    </div>
                </div>
            </Container>
        </div>

    )
}
