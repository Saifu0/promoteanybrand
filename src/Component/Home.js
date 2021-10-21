import { Grid, Typography, Button } from "@mui/material";
import Landing from "../assests/landing.jpg";
import React from "react";
import Services from "./Services";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Grid style={{ padding: 50, paddingLeft: 100}} container spacing={1} alignItems='center'>
        <Grid item xs={12} sm={6}>
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
          <Grid container direction="row"
            alignItems="center" justifyContent="center" spacing={0} style={{ marginTop: 20, width: 300, marginLeft: 125}}>
            {/* <Grid item xs={3}></Grid> */}
            <Grid item xs={5} sm={4} md={6}>
              <Link
                to='/brand'
                style={{ textDecorationLine: "none", color: "white" }}
              >
                <Button variant='contained' style={{ backgroundColor: "#1C9CEA" }}>I'm Brand</Button>
              </Link>
            </Grid>
            <Grid item xs={5} sm={8} md={6}>
              <Link
                to='/influencer'
                style={{ textDecorationLine: "none", color: "white" }}
              >
                <Button variant='contained' style={{ backgroundColor: "#1C9CEA" }}>I'm Influencer</Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
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
