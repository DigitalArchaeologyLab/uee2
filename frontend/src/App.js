import "./assets/fonts.css";
import "./App.css";
import "./variables.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TitleIndex from "./containers/TitleIndex/TitleIndex";
import SubjectBrowse from "./containers/Subjects/SubjectBrowse";
import Article from "./containers/Article/Article";
import Homepage from "./containers/Homepage/Homepage";
import Timemap from "./containers/Timemap/Timemap";
import Glossary from "./containers/Glossary/Glossary";
import BasicPage from "./containers/Basic/BasicPage";
import IIIFImageIFrame from "./components/Image/IIIFImageIFrame";
import IIIFImage from "./components/Image/IIIFImage";
import SwipeableTemporaryDrawer from "./containers/Drawer/Drawer";
import ScrollToTop from "./utils/scrollToTop";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="app">
      <div>
        <Router>
          <ScrollToTop />
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
            <Route path="/articles">
              <TitleIndex />
            </Route>
            <Route path="/glossary">
              <Glossary />
            </Route>
            <Route path="/iiif-image">
              <IIIFImage />
            </Route>
            <Route path="/iiif-iframe">
              <IIIFImageIFrame />
            </Route>
            <Route path="/drawer">
              <SwipeableTemporaryDrawer />
            </Route>
            <Route path="/about/:slug">
              <BasicPage />
            </Route>
            <Route path="/about">
              <BasicPage />
            </Route>
            <Route path="/article/:id">
              <Article />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
