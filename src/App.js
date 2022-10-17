// import libraries
import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import pages
import Detail from "./pages/Detail/Detail";
import Favorit from "./pages/Favorit/Favorit";
import Home from "./pages/Home/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/favorit" element={<Favorit />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
