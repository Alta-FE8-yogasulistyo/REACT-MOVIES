import React, { Component } from "react";
import ListFilm from "../../components/ListFilm";
import Navbar from "../../components/Navbar";

class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <ListFilm judul1="Nom Playing" />
      </>
    );
  }
}

export default Home;
