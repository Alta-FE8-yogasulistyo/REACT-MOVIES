import React, { Component } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

const BASEURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=3812e9c1284f7c1d1663a94152f486fa&language=en-US&page=1";
const BASEIMAGE = "https://image.tmdb.org/t/p/original";

class ListFilm extends Component {
  state = {
    film: [],
  };

  componentDidMount() {
    axios
      .get(`${BASEURL}`)
      .then((respon) => {
        this.setState({
          film: respon.data.results,
        });
        console.log(respon.data.results);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        {/* <h1 className="text-center">{this.props.judul1}</h1> */}
        <Container fluid>
          <h1 className="text-center mt-4">{this.props.judul1}</h1>
          <Row md={5}>
            {this.state.film.map((data, index) => {
              return (
                <div key={index}>
                  <Col>
                    <Card style={{ width: "20rem" }} className="me-4 mb-4">
                      <Card.Img style={{ height: "20rem" }} variant="top" src={BASEIMAGE + data.backdrop_path} />
                      <Card.Body>
                        <Card.Title className="text-center">{data.title}</Card.Title>
                        <Card.Text className="text-center">{data.release_date}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </div>
              );
            })}
          </Row>
        </Container>
      </>
    );
  }
}

export default ListFilm;
