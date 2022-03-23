import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "pages/HomePage";

import "assets/css/style.css";

const App = () => {
  return (
    <Router>
      <Route path="/" component={HomePage} />
    </Router>
  );
};

export default App;
