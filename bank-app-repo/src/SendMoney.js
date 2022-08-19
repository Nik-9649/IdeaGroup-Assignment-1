import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function SendMoney({
  setAmount,
  amount,
  handleChange,
  newLabel,
  setLabel,
  buttonState,
  setButtonState,
}) {
  const [empty, setEmpty] = useState(null);
  function getData(val) {
    const result = val.target.value.replace(/\D/g, "");
    setAmount(result);
    setLabel("Amount");
    setButtonState(false);
  }

  return (
    <Grid
      sx={{
        borderRadius: 5,
      }}
      container
      boxShadow={5}
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
      >
        <Grid
          alignItems="stretch"
          sx={{
            borderRadius: 5,
          }}
          container
          justifyContent="center"
          marginTop={1}
          marginBottom={1}
          marginLeft={1}
          marginRight={1}
        >
          <Grid item>
            <TextField
              color="secondary"
              variant="filled"
              label="Receiver's Name"
            ></TextField>
          </Grid>
          <Grid>
            <TextField
              color="secondary"
              variant="filled"
              label="Receiver's IBN"
            ></TextField>
          </Grid>
          <Grid>
            <TextField
              color="secondary"
              value={empty}
              onChange={getData}
              variant="filled"
              label={newLabel}
            ></TextField>
          </Grid>
          <Grid>
            <Button
              disabled={buttonState}
              variant="contained"
              onClick={() => {
                handleChange(amount);
                setLabel("Sent");
              }}
            >
              <Typography>Send</Typography>
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
