import React from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Dashboard from "./components/dashboard/Dashboard";
import Post from "./components/posts/PostDetails";
import CreatePost from "./components/posts/CreatePost";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/" component={Post} />
          <Route path="/create/" component={CreatePost} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
