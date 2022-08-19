import { Grid } from "@mui/material";
import CustomStyledCard from "./StylizedCard";

export default function PageMenu() {
  return (
    <Grid
      container
      marginRight={3}
      marginLeft={3}
      marginTop={2}
      boxShadow={5}
      sx={{ maxWidth: 270, maxHeight: 546, borderRadius: 5 }}
    >
      <Grid item marginLeft={1} marginRight={1} marginTop={1} marginBottom={2}>
        <CustomStyledCard midValue="Dashboard"></CustomStyledCard>
        <CustomStyledCard midValue="Paybill"></CustomStyledCard>
        <CustomStyledCard midValue="Account"></CustomStyledCard>
      </Grid>
    </Grid>
  );
}
