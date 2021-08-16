import React from "react";
import SendSms from "./Send";
import History from "./History";
import Header from "./Header";
import { Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Header />
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
