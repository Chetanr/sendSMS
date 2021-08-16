import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import SendSms from "./Send";
import History from "./History";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <SendSms />
      </Container>
      <Container xs={12} md={8} lg={9} className={classes.container}>
        <History />
      </Container>
    </main>
    // <div className={classes.root}>
    //   <AppBar position="static">
    //     <Toolbar>
    //       <Button color="inherit">Send SMS</Button>
    //       <Button color="inherit">History</Button>
    //     </Toolbar>
    //   </AppBar>
    // </div>
  );
}
