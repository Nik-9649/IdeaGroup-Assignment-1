import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import axios from "axios";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"],
  },
  {
    title: "Features",
    description: [
      "Cool stuff",
      "Random feature",
      "Team feature",
      "Developer stuff",
      "Another one",
    ],
  },
  {
    title: "Resources",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource",
    ],
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
  },
];

function PricingContent() {
  // Declearing the Main players Object
  const [players, setPlayers] = React.useState(null);

  // URL for the API
  const url = "https://prod.roundrocktennis.com/v1/players";
  // useEffect set on url so it only fetches the link once
  React.useEffect(() => {
    // used axios to get the data from API
    // also storing that data inside players object and used spread operator to unwrap the already given array
    axios.get(url).then(response => setPlayers({ ...response.data }));
  }, [url]);

  // used if statement to see if the players object has any data
  if (players) {
    // decleared an empty array to store the data with its detailes
    const tiers = [];

    // used for-of loop to get each key of the players object
    // PS: keys of the object are same as its index so they are being used as index
    for (const key of Object.keys(players)) {
      // pushing the sorted information into the tiers array
      // // TODO: still have to figure out how to assign a string "N/A" to the data that isnt available
      tiers.push({
        title: players[key].firstName ? players[key].firstName : "N/A",
        price: players[key].isCaptain === true ? "Captain" : "Player",
        description: [
          players[key].fullName ? `Full Name: ${players[key].fullName}` : "N/A",
          players[key].description
            ? `Player Description: ${players[key].description}`
            : "N/A",
          players[key].teamName ? `Team: ${players[key].teamName}` : "N/A",
          players[key].matchesWon
            ? `Matches Won: ${players[key].matchesWon}`
            : "N/A",
          players[key].matchesLost
            ? `Matches Lost: ${players[key].matchesLost}`
            : "N/A",
          players[key].matchesDraw
            ? `Matches Draw: ${players[key].matchesDraw}`
            : "N/A",
        ],
        buttonText: "Vote",
        buttonVariant: players[key].isCaptain === true ? "filled" : "outlined",
        key: players[key],
      });
    }

    // checking if the tiers array has been assigned
    // this if statement wraps the rest of the document till the last returning element check the end of the document to see where it ends
    if (tiers) {
      return (
        <React.Fragment>
          <GlobalStyles
            styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
          />
          <CssBaseline />
          <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
          >
            <Toolbar sx={{ flexWrap: "wrap" }}>
              <Typography
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                Company name
              </Typography>
              <nav>
                <Link
                  variant="button"
                  color="text.primary"
                  href="/"
                  sx={{ my: 1, mx: 1.5 }}
                >
                  Home
                </Link>
                <Link
                  variant="button"
                  color="text.primary"
                  href="#"
                  sx={{ my: 1, mx: 1.5 }}
                >
                  Features
                </Link>
                <Link
                  variant="button"
                  color="text.primary"
                  href="#"
                  sx={{ my: 1, mx: 1.5 }}
                >
                  Enterprise
                </Link>
                <Link
                  variant="button"
                  color="text.primary"
                  href="#"
                  sx={{ my: 1, mx: 1.5 }}
                >
                  Support
                </Link>
              </nav>
              <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                Login
              </Button>
            </Toolbar>
          </AppBar>
          {/* Hero unit */}
          <Container
            disableGutters
            maxWidth="sm"
            component="main"
            sx={{ pt: 8, pb: 6 }}
          >
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Pricing
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              component="p"
            >
              Quickly build an effective pricing table for your potential
              customers with this layout. It&apos;s built with default MUI
              components with little customization.
            </Typography>
          </Container>
          {/* End hero unit */}
          <Container maxWidth="md" component="main">
            <Grid container spacing={5} alignItems="flex-end">
              {tiers.map(tier => (
                // Enterprise card is full width at sm breakpoint
                <Grid
                  item
                  key={tier.key}
                  xs={12}
                  sm={tier.title === "Captain" ? 12 : 6}
                  md={4}
                >
                  <Card>
                    <CardHeader
                      title={tier.price}
                      subheader={tier.subheader}
                      titleTypographyProps={{ align: "center" }}
                      action={tier.price === "Captain" ? <StarIcon /> : null}
                      subheaderTypographyProps={{
                        align: "center",
                      }}
                      sx={{
                        backgroundColor: theme =>
                          theme.palette.mode === "light"
                            ? theme.palette.grey[200]
                            : theme.palette.grey[700],
                      }}
                    />
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "baseline",
                          mb: 2,
                        }}
                      >
                        <Typography
                          component="h2"
                          variant="h4"
                          color="text.primary"
                        >
                          {tier.title}
                        </Typography>
                      </Box>
                      <ul>
                        {tier.description.map(line => (
                          <Typography
                            component="li"
                            variant="subtitle1"
                            align="center"
                            key={line}
                          >
                            {line}
                          </Typography>
                        ))}
                      </ul>
                    </CardContent>
                    <CardActions>
                      <Button fullWidth variant={tier.buttonVariant}>
                        {tier.buttonText}
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
          {/* Footer */}
          <Container
            maxWidth="md"
            component="footer"
            sx={{
              borderTop: theme => `1px solid ${theme.palette.divider}`,
              mt: 8,
              py: [3, 6],
            }}
          >
            <Grid container spacing={4} justifyContent="space-evenly">
              {footers.map(footer => (
                <Grid item xs={6} sm={3} key={footer.title}>
                  <Typography variant="h6" color="text.primary" gutterBottom>
                    {footer.title}
                  </Typography>
                  <ul>
                    {footer.description.map(item => (
                      <li key={item}>
                        <Link
                          href="#"
                          variant="subtitle1"
                          color="text.secondary"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Grid>
              ))}
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Container>
          {/* End footer */}
        </React.Fragment>
      );
    }
    // if statement that was implimented to check the tiers arry ends here
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  }
}

export default function Pricing() {
  return <PricingContent />;
}
