import PageMenu from "./Page-Menu";
import { Grid } from "@mui/material";
import ProfileCard from "./ProfileCard";

export default function ProfilePageContent() {
  return (
    <Grid
      sx={{
        borderRadius: 5,
      }}
      container
      wrap="nowrap"
      marginTop={1}
      marginBottom={13}
    >
      <Grid>
        <PageMenu />
      </Grid>
      <Grid>
        <ProfileCard />
      </Grid>
    </Grid>
  );
}
