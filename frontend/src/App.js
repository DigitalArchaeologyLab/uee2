import logo from "./logo.svg";
import "./App.css";
import ArticleList from "./components/ArticleList/ArticleList";
import Article from "./containers/Article/Article";
import Homepage from "./containers/Homepage/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/articles">
              <ArticleList />
            </Route>
            <Route path="/:id">
              <Article />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
