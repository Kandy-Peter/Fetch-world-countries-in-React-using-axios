import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route  path="/a-propos" exact component={About} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
