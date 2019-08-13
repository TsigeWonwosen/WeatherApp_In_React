import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Titles from "./components/Titles";
import Weather from "./components/weather";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Error from "./components/Error";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/title" component={Titles} />
            <Route path="/weather" component={Weather} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
