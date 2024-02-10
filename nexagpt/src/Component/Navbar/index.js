import { AppBar, Box, styled, Toolbar } from "@mui/material";
import CustomerInfo from "./CustomerInfo";
import Logo from "./Logo";
import MiddleBar from "./MiddleBar";

const StyledToolbar = styled(Toolbar)({
  backgroundColor: "transparent",
  justifyContent: "space-around",
  height: "70px",
  margin: 0,
  padding: 0,
});

function Navbar() {
  return (
    <Box display={{ xs: "none", md: "block" }}>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "white",
        }}
      >
        <StyledToolbar>
          <Logo />
          <MiddleBar />
          <CustomerInfo />
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
