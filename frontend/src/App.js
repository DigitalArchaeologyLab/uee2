import "./assets/fonts.css";
import "./App.css";
import ArticleList from "./components/ArticleList/ArticleList";
import SubjectTree from "./components/SubjectTree/SubjectTree";
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
              <SubjectTree />
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
