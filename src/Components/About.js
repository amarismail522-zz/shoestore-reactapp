import React from 'react'
import { Container, Divider, Grid, Card } from '@material-ui/core';
import PermContactCalendarTwoToneIcon from '@material-ui/icons/PermContactCalendarTwoTone';
export default function About() {
    return (
        <Container>
            <div className="aboutHeading">
                <h1>About Me</h1>
                <Divider className="divider" />
            </div>
            <Card className="aboutCard">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={2}>
                        <div>
                            <PermContactCalendarTwoToneIcon className="aboutIcon" />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={10}>


                        <div className="aboutDesc">
                            <h1>This is Amar Ismail</h1>
                            <p>I'm learning Web and Hybrid Mobile Application tech at Saylani Mass IT Traning Program and also learning this Bootcamp2020.</p>
                        </div>

                    </Grid>

                </Grid>
            </Card>

        </Container>
    )
}
