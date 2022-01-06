import { Container, Grid, Typography, Box, Button } from "@mui/material";
import React from "react";

const HomeBanner = () => {
  const bannerFontStyle = {
    fontFamily: "var(--dosis-font)",
    fontWeight: "600",
    textAlign: "left",
  };
  const readMore = {
    backgroundColor: "white",
  };
  return (
    <Container sx={{ pb: 8, pt: 8 }}>
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Box sx={{}}>
            <Typography style={bannerFontStyle} variant="h2" gutterBottom>
              Mobile Bazzer
            </Typography>
            <Typography
              style={bannerFontStyle}
              variant="h2"
              gutterBottom
              sx={{ color: "var(--color)" }}
            >
              DELIVERY SERVICE
            </Typography>
          </Box>
          <Typography
            sx={{ textAlign: "left", mt: 2 }}
            variant="h6"
            gutterBottom
          >
            <Box
              sx={{
                display: "inline",
                color: "var(--color)",
                fontWeight: "bold",
                width: "5px  ",
              }}
            >
              |{" "}
            </Box>{" "}
            We now deliver different types of Product Our Site.We have good
            quality mobile phones available here .
          </Typography>
          <Box>
            <Button
              variant="contained"
              sx={{
                backgroundImage: "var(--button-bg)",
                borderRadius: "30px",
                p: "10px 35px",
                mt: 3,
                fontSize: "17px",
                fontWeight: 600,
                fontFamily: "",
              }}
            >
              Order Now
            </Button>
            <Button
              variant="contained"
              style={readMore}
              sx={{
                color: "var(--color)",
                borderRadius: "30px",
                p: "10px 35px",
                mt: 3,
                fontSize: "17px",
                fontWeight: 600,
                ml: { xs: 0, sm: 5 },
              }}
            >
              Read More
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={8}
          sx={{
            mx: "auto",
            pt: { xs: 0, md: "auto" },
            display: { xs: "none", md: "initial" },
          }}
          md={5}
        >
          <img
            style={{ width: "70%" }}
            src="https://media.4rgos.it/i/Argos/1721-m007-25-01-samsung-mobile?maxW=768&qlt=75&fmt.jpeg.interlaced=true"
            alt=""
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeBanner;
