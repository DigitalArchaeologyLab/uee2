import "./assets/fonts.css";
import "./App.css";
import ArticleList from "./components/ArticleList/ArticleList";
import Subjects from "./containers/Subjects/Subjects";
import Article from "./containers/Article/Article";
import Homepage from "./containers/Homepage/Homepage";
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
            <Route exact path="/subjects">
              <Subjects />
            </Route>
            <Route path="/articles">
              <ArticleList />
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
