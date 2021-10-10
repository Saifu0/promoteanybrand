import React from "react";
import { AppBar, Container, Toolbar, Typography, Grid } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import WhatsApp from "@mui/icons-material/WhatsApp";

function Footer() {
  return (
    <AppBar  position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
      <Container maxWidth='md'>
        <Toolbar>
          <Grid container spacing={2} alignItems='center'>
            <Grid item xs={8}>
              <Typography variant='body1' color='inherit'>
                Copyrights © 2020 | All Rights Reserved
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Grid container alignItem='center'>
                <Grid item xs={2}>
                  <CallIcon />
                </Grid>
                <Grid item xs={1}>
                  <WhatsApp />
                </Grid>
                <Grid item xs={6}>
                  +91 84335 81610
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Footer;
