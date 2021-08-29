import { useState } from "react";
import { Tabs, Tab, Grid, AppBar } from "@material-ui/core";
import { makeStyles, rgbToHex } from "@material-ui/core/styles";
import { yellow } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  border: {
    border: "",
  },
  tab: {
    background: "rgb(42, 42, 42)",
   
  },
}));

export default function Home() {
  const [value, setValue] = useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };

  return (
    <Grid container>
      <Grid item xs={1}>
        <AppBar
          position="fixed"
          style={{alignItems:'center', height: "10vh", background: "rgb(129, 0, 0)", }}
        >
          <Tabs
            style={{background: "rgb(129, 0, 0)", borderRadius: '30px'}}
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            centered={true}
            className={classes.tab}
          >
            <Tab label="Blog"  />
            <Tab label="Proyects" />
            <Tab label="Contact" />
          </Tabs>
        </AppBar>
      </Grid>

      <Grid item xs={10}>
        {/* <Card elevation={3} className={classes.cardContainer}>
            {value === 0 && <CreateAccount assets={assets} />}
            {value === 1 && <BalanceAccount assets={assets} />}
            {value === 2 && <Transaction />}
            {value === 3 && <TransactionsHistory publicKey={publicKey} />}
            {value === 4 && (
              <ChangeTrust
                publicKey={publicKey}
                secretKey={secretKey}
                assets={assets}
                account={account}
              />
            )}
            
          </Card> */}
      </Grid>
    </Grid>
  );
}
