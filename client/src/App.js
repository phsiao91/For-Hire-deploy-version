import './App.css';
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
import Bio from "./Bio";
import Language from "./Language";
import WorkHistory from "./WorkHistory";
import Intro from "./Intro";
import Education from "./Education";
import Resume from "./Resume";
import Account from './Account';
import Social from './Social';
import Hobby from './Hobby';
import Dark from './Dark';
// import IconNew from './IconNew';
import Cal from './Cal';


function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  

  return (
    <>
      <NavBar user={user} setUser={setUser} />
        <main>
          {user? (
          <Switch>
            <Route path="/languages">
              <Language/>
            </Route>
            <Route path="/socials">
              <Social/>
            </Route>
            <Route path="/introductions">
              <Intro/>
            </Route>
            <Route path="/resumes">
              <Resume/>
            </Route> 
            <Route path="/educations">
              <Education/>
            </Route>
            <Route path="/bios">
              <Bio/>
            </Route>
            <Route path="/hobbies">
              <Hobby/>
            </Route>
            <Route path="/cal">
              <Cal/>
            </Route>
            <Route path="/dark">
              <Dark/>
            </Route>
            <Route path="/workhistories">
              <WorkHistory/>
            </Route>
            <Route path="/accounts">
              <Account user={user}/>
            </Route>
            <Route path="/">
              <Home user={user}/>
            </Route>
          </Switch>
            ) : (
          <Switch>
            <Route path="/signup">
              <SignUp setUser={setUser} />
            </Route>
            <Route path="/login">
              <Login setUser={setUser} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          )}
        </main>
    </>
  );
}

export default App;
