import { Avatar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import ProfilePageContent from "./ProfilePageContent";
import { red } from "@mui/material/colors";
import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <Container>
        <Grid container>
          <AppBar boxShadow={20}>
            <Grid container gridAutoColumns={3}>
              <Grid
                container
                marginTop={2}
                marginBottom={1}
                marginLeft={15}
                marginRight={1}
                flexGrow={1}
                xs={"auto"}
              >
                <Grid item xs={"auto"}>
                  <AccountBoxRoundedIcon
                    sx={{
                      display: { xs: "none", md: "flex" },
                      mr: 1,
                      marginTop: 0.5,
                    }}
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
                    User Profile
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                marginTop={1}
                marginLeft={120}
                marginRight={1}
                xs={"auto"}
              >
                <Avatar sx={{ bgcolor: red[500] }} aria-label="user profile">
                  M
                </Avatar>
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
          marginTop={10}
          boxShadow={10}
        >
          <ProfilePageContent />
        </Grid>
      </Container>
    </>
  );
};

export default Profile;
