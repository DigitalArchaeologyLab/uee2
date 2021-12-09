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
import BasicPage from "./containers/Basic/BasicPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IIIFImageIFrame from "./components/Image/IIIFImageIFrame";
import IIIFImage from "./components/Image/IIIFImage";
import SwipeableTemporaryDrawer from "./containers/Drawer/Drawer";
import ScrollToTop from "./utils/scrollToTop";

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
            {/* <Route exact path="/about">
              <About />
            </Route> */}
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
