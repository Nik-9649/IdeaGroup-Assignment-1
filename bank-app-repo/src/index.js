import React from "react";
import ReactDOM from "react-dom/client";
import DashboardPage from "./DashboardPage";
import { Avatar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Container>
      <Grid container>
        <AppBar boxShadow={20}>
          <Grid container>
            <Grid
              item
              marginTop={3}
              marginbuttom={1}
              marginLeft={16}
              marginRight={1}
              flexGrow={1}
            >
              <Typography>The Capital Bank Dashboard</Typography>
            </Grid>
            <Grid
              item
              marginTop={1}
              marginbuttom={1}
              marginLeft={1}
              marginRight={1}
              flexGrow={0}
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
        <DashboardPage />
      </Grid>
    </Container>
  </React.StrictMode>
);
