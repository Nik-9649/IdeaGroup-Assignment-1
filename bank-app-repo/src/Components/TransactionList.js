import CustomStyledCard from "./StylizedCard";
import { Card } from "@mui/material";
import { Grid } from "@mui/material";
import { useState } from "react";

export default function TransactionList() {
  const [lastTransaction, setLastTransaction] = useState(30);
  const [heading, setHeading] = useState("Last Transaction");
  const [subs, setSubs] = useState(
    `Spotify Subscription:  - $ ${lastTransaction}`
  );
  return (
    <Grid
      sx={{
        borderRadius: 5,
        maxHeight: 254,
      }}
      container
      marginLeft={2}
      marginRight={2}
      marginTop={2}
      marginBottom={1}
      boxShadow={5}
    >
      <Card
        sx={{ marginLeft: 8, marginRight: 2, marginTop: 2, marginBottom: 2 }}
        elevation={100}
      >
        <CustomStyledCard
          heading={heading}
          subs={subs}
          fontsize={16}
        ></CustomStyledCard>
      </Card>
    </Grid>
  );
}
