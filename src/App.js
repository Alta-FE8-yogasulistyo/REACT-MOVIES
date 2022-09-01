// import libraries
import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import pages
import ListFav from "./components/ListFav";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/Favorit" element={<ListFav />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
