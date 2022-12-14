import React from "react";
import { Switch, Route } from "react-router";

import Music from "../components/Music";
import Player from "../components/Player";
import MyList from "../components/MyList";

const Routes = (props) => (
  <Switch>
    <Route exact path="/" component={Music} />
    <Route
      exact
      path="/mylist"
      render={() => <MyList {...props} token={props.token} />}
    />
    <Route
      exact
      path="/player"
      render={() => <Player {...props} token={props.token} />}
    />
    <Route  path="*" component={Music}/>
  </Switch>
);

export default Routes;
