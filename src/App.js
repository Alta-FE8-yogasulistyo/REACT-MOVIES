import React, { Component } from "react";
import Navbars from "./components/Navbar";
import ListFilm from "./components/ListFilm";
import ListFav from "./components/ListFav";

class App extends Component {
  render() {
    return (
      <>
        <Navbars nav1="Movies" nav2="Now Playing" nav3="Favorit" />
        <ListFilm judul1="Now Playing" />
        <ListFav data="List Favorit" />
      </>
    );
  }
}
export default App;
