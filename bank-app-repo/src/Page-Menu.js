import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
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
        <CustomStyledCard
          icon={
            <DashboardRoundedIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 2,
                color: "white",
                marginTop: 1.7,
              }}
            />
          }
          href="./DashboardPage"
          component="a"
          midValue="Dashboard"
        ></CustomStyledCard>
        <CustomStyledCard
          icon={
            <ReceiptLongRoundedIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 2,
                color: "white",
                marginTop: 1.7,
              }}
            />
          }
          midValue="Paybill"
        ></CustomStyledCard>
        <CustomStyledCard
          icon={
            <AccountBoxRoundedIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 2,
                color: "white",
                marginTop: 1.7,
              }}
            />
          }
          midValue="Account"
        ></CustomStyledCard>
      </Grid>
    </Grid>
  );
}
