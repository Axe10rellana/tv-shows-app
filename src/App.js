import { HashRouter, Switch, Route } from "react-router-dom";

//componentes
import Navbar from "./components/Navbar";

//paginas
import HomePage from "./pages/Homepage";
import AboutPage from "./pages/Aboutpage";
import SinglePage from "./pages/Singlepage";
import Error404 from "./pages/Error404";

const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/acerca" component={AboutPage} />
          <Route path="/singleshow/:id" component={SinglePage} />
          <Route path="*" component={Error404} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default App;
