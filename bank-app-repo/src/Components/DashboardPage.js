import { Outlet, Link } from "react-router-dom";
import BalanceLimitComponent from "./Balance-Limit-Component";
import { Avatar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { AccountBalance } from "@mui/icons-material";
import { Menu, MenuItem } from "@mui/material";
import { red } from "@mui/material/colors";
import { useState } from "react";

const DashboardPage = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Container>
        <Grid container>
          <AppBar boxShadow={20}>
            <Grid container gridAutoColumns={3}>
              <Grid
                container
                marginTop={3}
                marginbuttom={1}
                marginLeft={15}
                marginRight={1}
                flexGrow={1}
                xs={"auto"}
              >
                <Grid item xs={"auto"}>
                  <AccountBalance
                    sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  />
                </Grid>
                <Grid item xs={"auto"}>
                  <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                      mr: 2,
                      display: { xs: "none", md: "flex" },
                      fontWeight: 700,
                      letterSpacing: ".1rem",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    The Capital Bank Dashboard
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                marginTop={1}
                marginbuttom={1}
                marginLeft={97.5}
                flexGrow={0}
                xs={"auto"}
              >
                <Grid>
                  <IconButton
                    onClick={handleClick}
                    boxShadow={5}
                    alt="User Account"
                  >
                    <Avatar
                      sx={{ bgcolor: red[500] }}
                      aria-label="user profile"
                    >
                      M
                    </Avatar>
                  </IconButton>
                  <Menu
                    id="simple-menu"
                    getContentAnchorEl={null}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    keepMounted
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>Settings</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                </Grid>
              </Grid>
            </Grid>
          </AppBar>
        </Grid>
        <Grid
          sx={{
            borderRadius: 5,
            maxHeight: 720,
          }}
          container
          marginLeft={2}
          marginTop={8}
          boxShadow={10}
        >
          <BalanceLimitComponent />
        </Grid>
      </Container>
      <Outlet />
    </>
  );
};

export default DashboardPage;
