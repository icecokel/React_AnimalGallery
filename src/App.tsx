import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Style.css";

import Main from "./components/main/Main";
import PageNotFound from "./components/common/PageNotFound";
import SignIn from "./components/main/SignIn";

const App = (props: any) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/signIn" component={SignIn} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default App;
