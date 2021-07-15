import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import './App.css';
import Biography from "./components/Biography";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import './style.css';



function App() {
  return (
    <Router>
      <div>
      <Header></Header>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/biography" component={Biography} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/Resume" component={Resume} />
        <Footer />
      </div>
    </Router>
  );
}


export default App;
