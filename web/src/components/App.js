import "../stylesheets/App.scss";
import AppLanding from "./AppLanding";
import Card from "./Card";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={AppLanding} />
        <Route path="/card" component={Card} />
      </Switch>
    </>
  );
}

export default App;
