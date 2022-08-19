import Card from "@mui/material/Card";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function CustomStyledCard({
  heading,
  midValue = [null],
  subs,
  fontsize = [24],
}) {
  return (
    <Grid
      sx={{
        borderRadius: 5,
      }}
      container
      marginTop={0.5}
    >
      <Card
        variant="outlined"
        sx={{
          bgcolor: "#1976d2",
          minWidth: 247,
          minHeight: 20,
          maxWidth: 247,
          mxHeight: 20,
          borderRadius: 5,
        }}
        elevation={100}
      >
        <Grid
          sx={{
            borderRadius: 5,
          }}
          container
          justifyContent="center"
          marginTop={1}
        >
          <Grid item>
            <Typography color="white" variant="subtitle1">
              {heading}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          sx={{
            borderRadius: 5,
          }}
          container
          justifyContent="center"
          marginTop={2}
        >
          <Grid item>
            <Typography
              marginTop={1}
              color="white"
              variant="subtitle1"
              sx={{ fontSize: fontsize }}
            >
              {midValue}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          sx={{
            borderRadius: 5,
          }}
          container
          justifyContent="center"
        >
          <Grid item>
            <Typography
              color="white"
              variant="h5"
              sx={{ fontSize: fontsize }}
              marginTop={-2}
              marginBottom={5}
              marginLeft={1}
              marginRight={1}
            >
              {subs}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
