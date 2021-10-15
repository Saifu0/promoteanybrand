import {
  Typography,
  Card,
  CardContent,
  Button,
  CardActions,
  Grid,
} from "@mui/material";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";

const services = [
  {
    name: "Google Ads",
    icon: <GoogleIcon />,
  },
  {
    name: "Twitter Ads",
    icon: <TwitterIcon />,
  },
  {
    name: "Facebook Ads",
    icon: <FacebookIcon />,
  },
  {
    name: "Instagram Ads",
    icon: <InstagramIcon />,
  },
  {
    name: "YouTube Promotion",
    icon: <YouTubeIcon />,
  },
  {
    name: "Email Marketing",
    icon: <MarkEmailReadIcon />,
  },
];

function Services() {
  return (
    <div>
      <Typography variant='h3' color='primary'>
        Services We Offer
      </Typography>
      <Typography variant='h6'>
        One stop solution for all your need with profitable results
      </Typography>
      <Grid
        container
        // spacing={2}
        alignItems='center'
        style={{ marginLeft: "7%", marginTop: 10 }}
      >
        {services.map((service) => (
          <Grid item xs={5} md={4}>
            <Card>
              <CardContent>
                <div>{service.icon}</div>
                <Typography variant='h5' component='div'>
                  {service.name}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Services;
