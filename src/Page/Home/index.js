import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Fragment } from "react";
import avatar from "../../Static/Images/Avatar/logo.png";
import NeonAvatar from "./NeonAvatar";

export default function Home() {
  return (
    <Fragment>
      <Box
        height="100vh"
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        {/* <Box
          height="80vh"
          width="400px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          border=""
        > */}
          <Grid mt={4} mb={1}>
            <NeonAvatar imageUrl={avatar}></NeonAvatar>
          </Grid>
          <Typography
            fontSize={45}
            color="blue"
            sx={{ textShadow: "0.5px 0.5px" }}
          >
            NexaQuanta.ai
          </Typography>
          <Typography
            fontSize={25}
            color="white"
            sx={{ textShadow: "0.3px 0.3px" }}
          >
            We are Generative AI Transformation Experts
          </Typography>
          <Box maxWidth={700} marginTop={2} mx={2}>
            <Typography fontSize={15} color="blue">
            Our highly experienced team has successfully delivered Responsible, Safe, and Cost-effective AI-powered transformation solutions to large enterprises across the globe and in numerous industry domains.
            </Typography>
          </Box>
          <Box
            sx={{
              border: "2px solid white",
              borderRadius: "15px",
              marginTop: 1,
            }}
          >
            <Button
              href="https://www.linkedin.com/in/engr-farhan"
              startIcon={
                <FacebookIcon
                  style={{
                    fontSize: "60px",
                    color: "blue",
                    marginInline: "15px",
                  }}
                />
              }
            >
              {/* Facebook */}
            </Button>
            <Button
              href="https://www.youtube.com/channel/"
              startIcon={
                <YouTubeIcon
                  style={{
                    fontSize: "60px",
                    color: "blue",
                    marginInline: "15px",
                  }}
                />
              }
              fontSize={35}
            >
              {/* YouTube */}
            </Button>
            <Button
              href="https://github.com/intigration"
              startIcon={
                <GitHubIcon
                  style={{
                    fontSize: "60px",
                    color: "blue",
                    marginInline: "15px",
                  }}
                />
              }
            >
              {/* GitHub */}
            </Button>
          </Box>
        {/* </Box> */}
      </Box>
    </Fragment>
  );
}
