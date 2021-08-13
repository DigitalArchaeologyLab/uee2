import "./assets/fonts.css";
import "./App.css";
import "./variables.css";
import TitleIndex from "./containers/TitleIndex/TitleIndex";
import SubjectBrowse from "./containers/Subjects/SubjectBrowse";
import Article from "./containers/Article/Article";
import Homepage from "./containers/Homepage/Homepage";
import Timemap from "./containers/Timemap/Timemap";
import SliderTest from "./containers/Timemap/SliderTest";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RangeSlider from "./components/Timeline/RangeSlider/RangeSlider";

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
            <Route exact path="/slider">
              <SliderTest />
            </Route>
            <Route exact path="/rangeslider">
              <RangeSlider />
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
