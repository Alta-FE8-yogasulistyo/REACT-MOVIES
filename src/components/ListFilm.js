import React, { Component } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import withRouter from "../withRouter";

const BASEURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=3812e9c1284f7c1d1663a94152f486fa&language=en-US&page=1";
const BASEIMAGE = "https://image.tmdb.org/t/p/original";

class ListFilm extends Component {
  state = {
    film: [],
  };
  // Fetching API
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

  // Get Detail
  handleDetail(data) {
    const idFilm = data.id;
    this.props.navigate("/detail", {
      state: {
        id: idFilm,
      },
    });
  }

  render() {
    return (
      <>
        <Container fluid>
          <h1 className="text-center mt-4">{this.props.judul1}</h1>
          <Row md={5}>
            {this.state.film.map((data, index) => {
              return (
                <div key={index}>
                  <Col>
                    <Card style={{ width: "20rem" }} className="me-4 mb-4">
                      <Card.Img variant="top" src={BASEIMAGE + data.poster_path} />
                      <Card.Body>
                        <Card.Title className="text-center">{data.title}</Card.Title>
                        <Card.Text className="text-center">{data.release_date}</Card.Text>
                        <Button onClick={() => this.handleDetail(data)} className="w-100 mt-2" variant="outline-info">
                          Detail Movie
                        </Button>
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

export default withRouter(ListFilm);
