import { Card, Grid } from "@mui/material";
import { useCallback, useState } from "react";
import PageMenu from "./Page-Menu";
import SendMoney from "./SendMoney";
import CustomStyledCard from "./StylizedCard";
import TransactionList from "./TransactionList";

export default function BalanceLimitComponent() {
  const [currentBalance, setCurrentBalance] = useState(4300);
  const [creditLimit, setCreditLimit] = useState(6000);
  const [amount, setAmount] = useState(null);
  const [label, setLabel] = useState("Amount");
  const [buttonState, setButtonState] = useState(true);

  const handleChange = useCallback(
    props => {
      if (currentBalance > 0) {
        setCurrentBalance(currentBalance - amount);
      }
    },
    [amount]
  );

  return (
    <Grid
      sx={{
        borderRadius: 5,
      }}
      container
      wrap="nowrap"
    >
      <PageMenu />
      <Grid container>
        <Grid
          item
          sx={{
            borderRadius: 5,
          }}
          container
          marginLeft={2}
          marginRight={2}
          marginTop={2}
          marginBottom={1}
          boxShadow={5}
        >
          <Card
            sx={{
              marginLeft: 7,
              marginRight: 3,
              marginTop: 2,
              marginBottom: 2,
            }}
            elevation={100}
          >
            <SendMoney
              handleChange={handleChange}
              amount={amount}
              setAmount={setAmount}
              newLabel={label}
              setLabel={setLabel}
              buttonState={buttonState}
              setButtonState={setButtonState}
            ></SendMoney>
          </Card>
        </Grid>
        <Grid
          item
          sx={{
            borderRadius: 5,
          }}
          container
          marginLeft={2}
          marginRight={2}
          marginTop={1}
          marginBottom={2}
          boxShadow={5}
        >
          <Card
            sx={{
              marginLeft: 8,
              marginRight: 2,
              marginTop: 2,
              marginBottom: 2,
            }}
            elevation={100}
          >
            <CustomStyledCard
              heading="Your Current Balance"
              subs={"$" + " " + currentBalance}
            ></CustomStyledCard>
            <CustomStyledCard
              heading="Your credit limit"
              subs={"$" + " " + creditLimit}
            ></CustomStyledCard>
          </Card>
        </Grid>
      </Grid>
      <TransactionList />
    </Grid>
  );
}
