import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import News from "./pages/News";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route  path="/a-propos" exact component={About} />
        <Route path="/news" exact component={News} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
