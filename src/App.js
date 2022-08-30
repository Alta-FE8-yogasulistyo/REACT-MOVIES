import React, { Component } from "react";
import Navbars from "./components/Navbar";
import ListFilm from "./components/ListFilm";
import ListFav from "./components/ListFav";

class App extends Component {
  render() {
    return (
      <>
        <Navbars />
        <ListFilm data="Now Playing" />
        <ListFav data="List Favorit" />
      </>
    );
  }
}
export default App;
