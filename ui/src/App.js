import React, { useContext, useEffect, useState } from "react";
import { Repo, Repos } from "./Pod.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useParams,
} from "react-router-dom";
// import "./tailwind.output.css";
import { AuthContext } from "./AuthContext";
import { NavBar } from "./Nav";

import { Login, SignUp } from "./Auth.js";

import "./App.css";

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}

export default function App() {
  const { isLoggedIn } = useContext(AuthContext);
  console.log(`isLoggedIn: ${isLoggedIn}`);
  return (
    <div>
      <Router>
        <div>
          <NavBar></NavBar>
          <div className="max-w-7xl mx-auto px-5 mt-5">
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="/repos">
                <Repos />
              </Route>
              <Route path="/repo/:reponame">
                <Repo value="" />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

// <div className="App">
//       <h1>
//         CodePod: the <span className="text-red-300">Pod</span> Development
//         Platform
//       </h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <p className="text-blue-300">some random staff</p>
//       <SequentialPods />
//       <button className="insert-btn">+</button>
//       <div className="insert">+</div>
//       <TreePods />
//       Tempor et mollit et nisi ex minim tempor deserunt ullamco amet voluptate
//       exercitation adipisicing. Elit pariatur irure sint tempor irure est
//       adipisicing ut dolore dolore adipisicing veniam id exercitation. Elit amet
//       quis voluptate cupidatat aute cupidatat exercitation exercitation irure
//       incididunt irure do qui. Nostrud in proident eiusmod ipsum quis nulla ea
//       aliqua.
//     </div>