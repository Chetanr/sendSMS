/*
This file is mainly used to setup routes that
would help in navigating between the Send and 
History components
*/
import React from "react";
import SendSms from "./Send";
import History from "./History";
import Header from "./Header";
import { Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      {/*
        Display the header component
       */}
      <Header />

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route exact from="/" render={(props) => <SendSms {...props} />} />
        <Route
          exact
          path="/history"
          render={(props) => <History {...props} />}
        />
      </Switch>
    </div>
  );
}
