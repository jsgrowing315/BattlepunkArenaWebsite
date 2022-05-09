import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// header
import Header from "./components/header";

// main pages
import Landing from "./pages/landing";
import Mint from "./pages/mint";
import LSD from "./pages/lsd";
import PunkyDexUser from "./pages/punkydex-user";
import PunkyDexUserCard from "./pages/punkydex-user-card";
import PunkyDexAdmin from "./pages/punkydex-admin";

// 404 page
import NotFound from "./pages/not-found";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          {/* routes start */}
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/mint">
            <Mint />
          </Route>
          <Route exact path="/lsd">
            <LSD />
          </Route>
          <Route exact path="/punkydex">
            <PunkyDexUser />
          </Route>
          <Route exact path="/punkydex/card">
            <PunkyDexUserCard />
          </Route>
          <Route exact path="/punkydex/admin">
            <PunkyDexAdmin />
          </Route>
          <Route exact path="/not-found">
            <NotFound />
          </Route>
          {/* routes end */}

          {/* redirect to 404 */}
          <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
