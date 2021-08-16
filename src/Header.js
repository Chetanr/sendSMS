import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = (props) => {
  const { history } = props;
  const classes = useStyles();

  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button
            onClick={() => handleButtonClick("/")}
            variant="h6"
            color="inherit"
          >
            Send SMS
          </Button>
          <Button
            onClick={() => handleButtonClick("/history")}
            variant="h6"
            color="inherit"
          >
            History
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Header);
