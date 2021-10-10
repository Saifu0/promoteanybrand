import { Grid, Typography, Button } from "@mui/material";
import Landing from "../assests/landing.jpg";
import React from "react";
import Services from "./Services";

function Home() {
  return (
    <div>
      <Grid container spacing={1} alignItems='center'>
        <Grid item xs={6}>
          <Typography variant='h6'>
            Looking for All in One Marketing Solution of your Business? You're
            at right place!
          </Typography>
          <Typography variant='h3' style={{ marginTop: 20 }}>
            Full Stack Marketing Services
          </Typography>
          <Typography variant='h6' color='primary' style={{ marginTop: 10 }}>
            One Solution for Influencer to get consistent revenue. One solution
            for Brand to engage with your target audience.
          </Typography>
          <Grid container alignItems='center' style={{ marginTop: 20 }}>
            <Grid item xs={3}></Grid>
            <Grid item xs={2}>
              <Button variant='contained'>I'm Brand</Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant='contained'>I'm Influencer</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <img
            src={Landing}
            alt='landing'
            style={{ width: "80%", height: "60%" }}
          />
        </Grid>
      </Grid>
      <Services />
    </div>
  );
}

export default Home;
