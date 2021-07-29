import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Enrollments from "./pages/Enrollments";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/enrollments" exact>
          <Enrollments />
        </Route>
        <Route path="/blog" exact>
          <Blog />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/contact" exact>
          <Contact/>
        </Route>
        <Route path="*" exact>
          <Error/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
