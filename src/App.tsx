import "./Style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PageNotFound from "./components/common/PageNotFound";
import Main from "./components/main/Main";

const App = (props: any) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default App;
