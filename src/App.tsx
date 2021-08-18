import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Style.css";

import DashBoard from "./components/main/DashBoard";
import PageNotFound from "./components/common/PageNotFound";
import SignIn from "./components/main/SignIn";
import Header from "./components/header/Header";
import Gallery from "./components/contents/Gallery";

const App = (props: any) => {
  const [hasHeader, setHasHeader] = useState<boolean>(true);
  return (
    <main className="main flex_row">
      <div className="flex_column">
        <Router>
          {hasHeader && <Header />}
          <section className="content_box">
            <div style={{ margin: " 25px" }}>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <DashBoard {...props} setHasHeader={setHasHeader} />
                  )}
                />
                <Route
                  exact
                  path="/signIn"
                  render={(props) => (
                    <SignIn {...props} setHasHeader={setHasHeader} />
                  )}
                />
                <Route
                  exact
                  path="/gallery/:kind"
                  render={(props) => (
                    <Gallery {...props} setHasHeader={setHasHeader} />
                  )}
                />

                <Route component={PageNotFound} />
              </Switch>
            </div>
          </section>
        </Router>
      </div>
    </main>
  );
};

export default App;
