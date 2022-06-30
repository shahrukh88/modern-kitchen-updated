
// importing components from react-router-dom package
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    } from "react-router-dom";
    import React from 'react';
    
  
    // import Home component
    import Home from "./components/mainpage/MainPage";
    // import About component
  import Platinum from "./components/platinum/Platinum";
  import Aboutus from "./components/aboutus/About";
  import Contact from "./components/contact/Contact"
  import TermCondition from "./components/termconditions/TermConditions"
  import TermConditions from "./components/termconditions/TermConditions";
  import Feature from "./components/featurebenefits/Feature";
  import Titaninum from "./components/titanium/Titanium";
  import Gold from "./components/gold/Gold";
  import Silver from "./components/silver/Silver";
    // import ContactUs component
    
    function App() {
    return (
      <>
       <Router>
        <Switch>
        <Route exact path="/" component={Home} />
          
        <Route path="/platinum" component={Platinum} />
        <Route path="/titainum" component={Titaninum} />
        <Route path="/gold" component={Gold} />
        <Route path="/silver" component={Silver} />
        <Route path="/Aboutus" component={Aboutus} />
        <Route path="/Contact" component={Contact} />
        <Route path="/feature" component={Feature} />
        <Route path="/term" component={TermCondition} />
        <Redirect to="/" />
        </Switch>
      </Router>
      </>
    );
    }
    
    export default App;
    