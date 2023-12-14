import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import { CustomLink } from "./style";

function NavBar({user, setUser}) {

 
  const handleLogout = () => {
    window.sessionStorage.clear();
    setUser();
    window.location.pathname = "/"
  }

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Welcome {user?.firstName}
            </Typography>
          </Box>

          <Box>
            <CustomLink to="/">
              <Button color="inherit" onClick={handleLogout}>Logout</Button>
            </CustomLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
