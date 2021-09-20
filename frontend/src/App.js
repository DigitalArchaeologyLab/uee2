import "./assets/fonts.css";
import "./App.css";
import "./variables.css";
import TitleIndex from "./containers/TitleIndex/TitleIndex";
import SubjectBrowse from "./containers/Subjects/SubjectBrowse";
import Article from "./containers/Article/Article";
import Homepage from "./containers/Homepage/Homepage";
import Timemap from "./containers/Timemap/Timemap";
import Glossary from "./containers/Glossary/Glossary";
import About from "./containers/About/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/subjects">
              <SubjectBrowse />
            </Route>
            <Route exact path="/timemap">
              <Timemap />
            </Route>
            <Route path="/articles">
              <TitleIndex />
            </Route>
            <Route path="/glossary">
              <Glossary />
            </Route>
            <Route path="/:id">
              <Article />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
