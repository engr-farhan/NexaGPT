import { Box, styled, Typography } from "@mui/material";
import { Fragment } from "react";
import lycheeLogo from "../../Static/Images/Logo/logo.png";
const StyledTypography = styled(Typography)({
  color: "blue",
  marginLeft: 0,
});

function Logo() {
  return (
    <Fragment>
      <Box sx={{ display: { md: "none", xs: "block" }, padding: 0 }}>
        <img height={75} width={60} src={lycheeLogo}></img>
      </Box>
      <StyledTypography
        variant="h3"
        sx={{ display: { md: "block", xs: "none" } }}
      >
NexaGPT      </StyledTypography>
    </Fragment>
  );
}

export default Logo;
