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
              Mi Phone Shop 
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
            We now deliver different types of Product Our Site.We have good quality mobile phones available here  .

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
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIPERISDxUSDxAPGBIREBAREhISEg8RGBgaGRgYGBocIS4lHB4sHxgaJzgmLC8xNTU1GiQ7QDs2Py42NTQBDAwMEA8PHBARGjEhJCs0MT4/NDQ0NDRAMTExMToxMTE2MTQxMTE0NDQxMTE0MTE0NDExNDQxPzE0MTE/ODExNP/AABEIAQMAwgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQMEBQYCBwj/xABMEAACAQMABAcLBgwGAgMAAAABAgADBBEFEiExBjJBUWFxcgcTIjR0gZGhsbLBM0Jzk7PRFCM1UlNikqLC0tPwFySClMPhJfEVQ2P/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAZEQEBAQEBAQAAAAAAAAAAAAAAARFBMSH/2gAMAwEAAhEDEQA/APZpnuGGnWsLdTQTv11cOKFrS5GqsCcn9UAEnqmhmR4R0w+krBW2inRvqoH62tb089eq7jzxBiODFjc6VevcaTuriqtCo9FaNKo1Ok9ROOwVcAICcDABOMk8k2FPRjUttpdV6BAACVlS4pefGrU/fx0Sh7nVTNpVzvNzck9ZeTNMcJqVvrJTxXrK2oyBwqoQMsXbBOwFdgB2so2bxpF7T0rf0flKFO8XZ+MtaqioecmnU1NUdCs5ku24V2ruEqM1vVbIFK4R6LsRv1VcBmHSBiYClw3ZT+NpKy89NyrDqVsg+kS2o8LLO5Q06joFfY1G7RdRs8h1sofSYweiU6iuMqQw6CDHJgFsKKgNbPVtNg1Wtan4sAfm03DUwOyo65LoaTvqPzqF4mTsYPb1QvJja6u3SWQSYraQmYp8MKKj/NpVsjjJaqoNJeuqpKebWMvrW9pVgGpOjhhkFWByOeQSZyxABJ2AbSZ1K/TjFbW5I2EUqpB5jqGBT0XrXxDsz0bZye800Yo1SmDx3YbdvIo2YlzS0dTQYUauOXYT5yRObamEaki7AiaoHMAMD1AR29vKdujVKzBEXex/voPogKEdeKdboOfjnPpEXv7DjqR0j/vYPSZ57V7pFTWJW3UU+RXqN3wj9YgYU9HhY5zLTR/dGs6mBXFS2bnZe+JnoZdvpUS4NkldTjB2ncDsJ6s749K2zu7e6UtQenWU7zTdW/a1T7Y+KZXiMR0Hd9w9EglwkXvrrvAYc6/dy+qdrcqd51efW2Y8+6A/CJFgEIQgEIQgEymnPypZ+S6Q9+2mrmT09+U7TyXSHv20sGM4C1zT0fcuN9OrdMOsEmYa0bVNRjtdmfXYnJcq7jJ8wE1/BA/+OvO3d/GYVqmGqduv77/fKibWqELrMwGtnVXaWYDYTjcBnI280r6tf+xshSbXYguiYHGfW1dm5dgOCdwzszyiQqz4OzYGyMcx/vECVbaSq25zb1alE5yQjMoY9IGxvPLuz4f3dPZWWncKOXHe3/aXwf3Zk6JUt4eSoBJCnBY8i55OvmzOWAOSmzoGt6snMg9QsO6Bavsc1LZjs8NdZP2lz6wJZU2ta/4ygUDE6xq2jmkzNzuaZGv1NmeMN/7gjlDrISjDcykqw84l0e7W+nL234ldblBnwLtAGPMO+IBgf6DJ7cM6dxSr21whtripRrd6ywejXYIxKo43Nv8ABYAnGyeJWvCe7p4BfvqjkqDWP7Qw3rl7ZaWS9NMkalSm6llJzjf4SnlG8SD38fKJ2TMN3Va3i1M8XUubjGSPxiNQRT0+DVf0zcr8onZM897rjYe2P/4Xo/ftj8InqvPTULHAYIANZmJICjnONvKBs5xK+tX27DrdOMExipX9Hg56dk5vMLsDI5xrayaw1TyowIBDDaCOfnmk3gW6KMHRnpuu50Yqw6iMETQaL7o+k7bA76LpB8y4XXJHb2P65jqlTPn9s7qinsVc5wNZySSx5cDcBzcvL0DI9g0T3Y6DYW9t6lA7i9FhVQdJU4YebM2uiuFWj7/H4NcUXc7kZtSoP9DYb0T5jZTuO3m+EbIB3wr6371jikp1bvPz+eKKjLv8IdHG/vonzJonhdpGywLe5qqox+Ldu+08Dk1HyB5sT0bgh3VzXqpQ0klOn30hEuaWsqBycKKiknAJ2awOByjG0QeuqwYAjaDuncj22zWHMx2deD8ZIgEIQgEyXCD8pWnkmkPftprZkuEX5RtPJdIe/aywee8Em/8AHXnbu/jMBdPh6nbr++03XBV8aPvO3dfGYC9b8a/0lf3zKjmje1KZJpsyMytTfVOC9Nt69WwegRivVLnJ2BRgTlqZ5NsbIPL65DHdLft5uuWek7VxUWmFpayqhD0GDpUUqCraw2E4PX6JUg4kinclM4JUkEHHMd8svzEs2yrHg3RR72ilRVZCza6uAylQjncd5GNnSBIWkaKU7mvTTiJUrImR8xXYLs6gJI4O36W13RrPkIj+E2NYoGVl1sDfjWzjokbSNdalxXqIcrUqVXUkYyrOzA45Nh3TPWuGWUSbwfYrdUscrFT0jVJ9oEZNAGmHDEcbwWA24DNkEcmEYZxvBHPhzQPjdDt/wmVH1Inyidkzznuytg230N971vPRl+UTsmea92s4/Bvob7/giK8fqVOQ7iB7I5c6QqVc98ZqjvqguxyxAGBt6pHZdYAjmEaKkc8amdDeyWlKmRb1KgWk41kpsGI77TJGVZV36p2jI2eDgyqjiVMeaWXLpZLMrupTZAusMa2GAP5pOyXHCC0pJa6OdFValWk/fdRcBiAjKxPK3hnMp61YuQSSTsG3kA5BLXTmlKdxa6PpoTr2yOlRNUjUPgAYb52tqFujOJFipwMDZGnUemSbSkKh1clTjYdmqDsAzzDJx1kDrYrDBxnIwrA4xkMoYbOTYYH03wDv2utHWtZyWd6aB2O9nQBGY9JKk+eaSY7uVfkez7D/AGjzYyAhCEAmR4R/lG18l0h79qJrpkeFAxe2x5TbaQTHQRSfPpQemWDzHgy+LG7H69z8Zhb35ap9JW94zZcHnxZ3Y/XuPjMXdtmtU+kq+9Kh23tKlbXFJdY00arU4vg01IBO07drDdt2yOhJyDjIxu6c/dHKdRkJ1CV11KNg4ypIJHqHojWMM4341Rkbjvj5iTdKUB/6nJp9Ms6j546K+CckEBm352OMjn2fGV9YYY+CUB2qGBBC8m/fIpllwJzO6kbMCzRSbfWyQcOq7mDjVYneDjA1hgEYyeU7edAeN0O0fdaRaS/i3YBt2GIDYHMCQd3QZM4Mpr3lsp2BnAJ6wYV9QofDp9kzzTu2nxXppX3/AAz0a0fWdCeUe1QfjPN+7gfExz077/h++B5ApwueYZj17aVbeoaVddV11QynVJXWxjapxyxkcXzTq7qs5Du2szMuSTknB3yzMu+s3dmeOSAd+JyUHVJto5CkYV1JOVYkDOBnbjHNv5hG7gAgFUKkcdthU7scXYP+5FRdTbG47mNQqbotSzldoypyQdqDZ4WOXBx0DfI93xz1IRsA2FVxuA5Mcg6o3RXWYAgtk7ABrZPIMcs6r8ds5znbra2tnp1tvpgfR3cq/I9n2H+0ebGY7uVfkez7D/aPNjICEIQCZHhX43a/QaQ+zSa6ZDhZ43afQaQ+zSWDyjgyQaNZTuapVB6iTMnpS2ZHYnjA+F2wAG9OxupxNLwcfCVfpanvR7SNnTrZ1tjEYJ5wN2erO/eMmVGKDiEtbjQBGdVvXn1HHtkCro6onJn0j7x65A0lVl4rEdAJx6JyXOMZOObOz0RGRxvB9GfZmcBoCtODFJhA5BI6M7+mW/BTx60+kHsMqpbcFfH7T6Qewwr6WsOMnUPcWZvuo6GN1aLUUFmtGZ3AGWNBxq1MDowrdSGaSx4ydke4snkyD5MqoaTFH3ruI2hhyEHlE5yDzT3/AE53NLC7YunfLV2OSKJQ089hwQvUuqJjtIdxysuTbXFGrzLUV6Bx1jXBPolHmIYjaMg842GK1ZiclmyOXJz6ZpdIdz3SlvnNvUqKPnUSlYHzKS37szdza1KTalVGR/zHUo/7LYPqgNEziK2RvBHXsiQjkxQcnbtPOYsIV9I9yr8j2fYf7R5sZju5YCNEWYP5jHzF2I9RmxkBCEIBMfwu8btPoNI/ZpNhMbws23tqN2rbaSc8uRq0kx0bXBz+rjl2WDxzQb4Sp9JU96TnqSo0U2FqfSVPekt3lQ69SRnecO8Yd4HVXDbwD1iRatFG3j07fbO3eMu8CO9qvJs85/8AXqjDW+Nx9I+I+6SmeNM0gitTI5j1H75a8FlxfWuf0g9hlezSfweqat5bNv1XBxuzgGB9K2O+n2R7iywaQLJCrIpOsVAUtjGsQignHJJ7SKSJCJAI1cUUqrq1ESoh3o6q6nzNsjkSBmb/AIB6Lr77ZKR57cvQx/pQhT5xMxpHuQWz5NtcVKRO5atNKqjoymofTmemRIHhmkO5PpCnk0TQuVHFCVNR2/0uFA/aMiaO7l+k61QLWRbWmSNarUqUnKjO3VRGJY43A4HSJ77EgcaFs0tqSUKQxToKlNAdp1VVQMnlOyWci2m9+v4CSoBCEICTHcLDi9tzz2ukUHaPeXHqpt6psZi+GB/ztpz94vvsjLPR4fYPgVO3U96Pu8hWrY752394xxnhDjvGWecs8aZ5R0zxtmnLNG2aQKzRtmiM04JgKWk3g8pa8tlG9nCjO7JBA9sriZZ8F2xf2hO0CrT2CB9NWrhnVhuYZHUUUya0r9G//X2F9xZYNIpIkIkAiQiQCJCJASEIQHrTe3X8BJUi2m9uv4CSoBCEIBMVwwAN7bZyNW20g4xjacUqYU9H40nrAm1mI4ZH/O23kt/9payweDUW2v239pnTPGEbwqnbf2mKzQjpmjbNOWacFoCs05LTktOCYCkzgmBMQmAEyy4NVNW9tm36rhsHccAmVZMsOD3jdDtfwmFfUFnS1DTXJbVUKGbGW1VC5ONmdkmtI6fKJ2TJDSBIkIkBIkWJASJFiQCJFiQH7Te3X8BJUi2fzuv4CSoBCEIBMRwz8dtfJb/7S1m3mH4aeO2vkt/9pbSwfP2fCqdt/aYhacsfDqdt/aZyWhHRacExCZwTAUmckwJiEwoJnJMCYhgBMseDnjdDtfwmVksuDnjdDtfAyD6nT5ROyY+0YXjp2Y80BIkWJASJCJAIQiQCJCECRZ/O6/gJKkSy+d1/ASXAIQhAJh+Gvjtt5Lf/AGltNxMNw38ctfJr/wC0tZYPnmofDqdt/aZwTFrHw6nbf2mcEwAmBMTM5JgKTEJiExJARIRIBLPg543Q7XwMrJZcHPG6Ha+BgfVC8dOyY80ZXjp1GOtASJCJAIkIQCJCJAIkIQJFl87r+AkuRLL53X8BJcAhCEAmF4ceOWvk199pazdTCcOfHLXya++0tZYPneufxlTtv7TOCZ1cfKP239pjeYC5iZiRJAsSESAQhEgEs+DnjdDtfAyslnwc8bodr4GB9ULx06o4Y0vHTqMdMBJzFiQCJFiQCJCJAIkIQJNl87r+AkuRLL53X8BJcAhCEAmD4deOWvkt979tN5MFw78ctfJb737aWD54uPlKnbb2mNRy5+Uftt7TGpAQiQgEIkIBCEIBLPg543Q7XwMrJZ8HPG6Ha+BgfU446dmOGNjjr1TswEhCEBIkWJASEIkAhCECTZfO6/gJLkSz3t1/ASXAIQhAJgeHnjlr5Lfe/bTfTA8PfHLXya+9+2lg+d7n5R+03tMajtzx37Te0xmQLEhCAQhCAQhCASz4OeN0O18DKyWfBzxuh2vgYH1OOOvVOjOBx16p2YBEhEgESLEgESEIBCEIEmz3t1/ASXIlnvP980lwCEIQCYDh/wCOWnk1979tN/PP+6B45aeTX3v20sHzxc8d+03tMajtzx37Te0xqQEIQgPUbd3yUVmxgHAzgkEj1KfRFa1qAZKOBjXzqtjV/O6umd2t2aWdUKdbVJ1gfmnIGw8+D5hJH/yZ1VGqvg7RgkDWAwDj05HLmBCeiy8ZWXrBHN949Mak2rfFlZSNj9O7w2f+LHmkKASz4OeN0O18DKyWfBzxuh2vgYH1N89eqdmcfOXqnRgESESAE4nOuOcc2/lisM9GeUbxGTbg4GTgcnQMYHqxAcDjnG3dtG2dRg2+c5O08uB+ay/xeqOouABvxA6hCECTZb2kuRLLe0lwCEIQCee90Lxu08nvvet56FPPO6IcXln0298P3reWD57ueO/ab2mNR24479pvaY1ICEIQCTKDgLtJ8zBdu3ftGeT0SHCB3U4zY3ZOMbt84hCASz4OeN0O18DKyWnBsZu6HaPumB9SfOXqnZja8ZOzOzAIkIkAnDjZ/wBZ9XXO4QG6Y3/cR8I5CEAhCECTZb2kuRLLe3m9gkuAQhCATzTuvE0PwG7wTTpPWoViBnCVVXB9KCej1AeSVOl9GLd0no1lD0qg1WU8vSOY9MD5VvVxUfG0MzMpG4qTkESPPWtJdx+sGP4LWpvTzladwGVgObXTPsEjr3J7j5y0wf1bmoR66MDy2E9S/wAJ635q/wC4b+jD/CitzL/uG/pQPLYT1E9ymtzL/uG/pRD3KK3Mv17f0oHl8J6ce5TX5l+ub+lD/Cmv+r9c39KB5jLDQVUJdW7McKKlMMTyIWAY+gmb3/Cmv+r9a39KTdG9y5qdRalQltQhhTDFgxG0ZOquzoxA9P0VeislNtzAajryo6jDA+cSxMyCaKuUYujFHPGIGVfH5y8/SJZ0a14ow9Km5/OFR0z5tUwLuJKr8Juf0C/Xv/JD8Juf0CfXP/JAtYSr/CLn9An1z/04d/uv0KfXP/JAtISs79dfoU+uf+SKKl3+ip/XP/JAsoSvD3f6Kn9c/wDJOkF0d6U16e+VGx5tQZ9MC2sjxj0yXKy2o1FA1jk8uBgZ6BJ6A8sB2EIQCEIQOYYhCAYiYhCAuIaohCAag5oag5oQgGqIaohCAaohqiEIBqDmhqDmhCAaohqiEICYi4hCAYhCEDqEIQCEIQP/2Q=="
            alt=""
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeBanner;
