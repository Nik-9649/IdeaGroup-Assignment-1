import BalanceLimitComponent from "./Balance-Limit-Component";
import { Avatar, Icon } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { AccountBalance } from "@mui/icons-material";

export default function DashboardPage() {
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
                marginLeft={90}
                marginRight={1}
                flexGrow={0}
                xs={"auto"}
              >
                <IconButton boxShadow={5} alt="User Account">
                  <Avatar></Avatar>
                </IconButton>
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
    </>
  );
}
