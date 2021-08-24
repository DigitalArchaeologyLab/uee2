import "./assets/fonts.css";
import "./App.css";
import "./variables.css";
import TitleIndex from "./containers/TitleIndex/TitleIndex";
import SubjectBrowse from "./containers/Subjects/SubjectBrowse";
import Article from "./containers/Article/Article";
import Homepage from "./containers/Homepage/Homepage";
import Timemap from "./containers/Timemap/Timemap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Timeslider from "./components/Timeslider/Timeslider";
import Reference from "./components/Reference/Reference";

function App() {
  return (
    <div className="app">
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/subjects">
              <SubjectBrowse />
            </Route>
            <Route exact path="/timemap">
              <Timemap />
            </Route>
            <Route exact path="/timeslider">
              <Timeslider />
            </Route>
            <Route exact path="/references">
              <Reference />
            </Route>
            <Route path="/articles">
              <TitleIndex />
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
