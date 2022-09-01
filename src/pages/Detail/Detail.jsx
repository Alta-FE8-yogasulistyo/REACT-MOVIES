// import Navbar from "../../components/Navbar";
import React, { Component } from "react";
import withRouter from "../../withRouter";

class Detail extends Component {
  render() {
    const DATAS = this.props.location.state;
    return <p>{DATAS.id}</p>;
  }
}

export default withRouter(Detail);
