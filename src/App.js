import React from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";

import Header from "./components/Header";
import Main from "./pages/main";

const App = () => (
  <div className="App">
    <Header />
    <Main />
  </div>
);

export default App;
