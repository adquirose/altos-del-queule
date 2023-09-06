import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";
// pages
import Presentation from "views/Presentation.js";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

ReactDOM.render(
  <BrowserRouter>
    <Route 
      path="/"
      render={(props) => <Presentation {...props} />}
    />
  </BrowserRouter>,
  document.getElementById("root")
);
