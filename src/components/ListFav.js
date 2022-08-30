import React, { Component } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

class ListFav extends Component {
  state = {
    film: [
      {
        image: "https://s1.bukalapak.com/img/68286857232/large/Poster_Film___Avengers_Endgame___Marvel_Studios___Movie_Post.jpg",
        tittle: "Avangers Endgame",
        desc: "Film ini menceritakan tentang superhero",
      },
      {
        image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-movie-poster-template-design-0f5fff6262fdefb855e3a9a3f0fdd361_screen.jpg?ts=1636996054",
        tittle: "FREDOM",
        desc: "Film ini mencari-cari kebebasan",
      },
      {
        image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1636999411",
        tittle: "ARCHER",
        desc: "Film ini menceritakan tentang pemanah",
      },
      {
        image: "https://3.bp.blogspot.com/-l1wvYQOYX60/XEQwXPmULeI/AAAAAAAAMeE/L-NvvXbwb8ADah01TFPcob-0sYazVPAggCLcBGAs/s640/black_panther_ver3.jpg",
        tittle: "Black Panther",
        desc: "Film ini menceritakan tentang nigga",
      },
      {
        image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-3fde07497ef159f8ba0617dee83d982e_screen.jpg?ts=1636997626",
        tittle: "Story Castlerock",
        desc: "Film ini menceritakan tentang gaktau",
      },
    ],
  };

  render() {
    return (
      <Container fluid>
        <h1 className="text-center mt-4 mb-4">{this.props.data}</h1>
        <Row md={5}>
          {this.state.film.map((data, index) => {
            return (
              <div key={index}>
                <Col>
                  <Card style={{ width: "20rem" }}>
                    <Card.Img style={{ height: "28rem" }} variant="top" src={data.image} />
                    <Card.Body>
                      <Card.Title className="text-center">{data.tittle}</Card.Title>
                      <Card.Text>{data.desc}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default ListFav;
