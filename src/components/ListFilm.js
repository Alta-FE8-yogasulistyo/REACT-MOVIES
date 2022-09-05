import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const BASEURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=3812e9c1284f7c1d1663a94152f486fa&language=en-US&page=1";

const BASEIMAGE = "https://image.tmdb.org/t/p/original";

const ListFilm = () => {
  const navigate = useNavigate();

  // penampung data dari api
  const [film, setFilm] = useState([]);

  // Fetch API Hook axios
  const getFilm = async () => {
    await axios
      .get(BASEURL)
      .then((respon) => {
        setFilm(respon.data.results);
      })
      .catch((erorr) => {
        console.log(erorr);
      });
  };
  // Push Data API ke Database(tampungan)
  useEffect(() => {
    getFilm();
  }, []);

  // handleClick to Detail PAges
  const handleClick = (film) => {
    navigate(`/Detail`, {
      state: {
        titleOri: film.original_title,
        title: film.title,
        overview: film.overview,
        release: film.release_date,
        vote: film.vote_average,
        languageOri: film.original_language,
        popularity: film.popularity,
        poster: BASEIMAGE + film.poster_path,
      },
    });
  };

  return (
    <>
      <h2 className="text-center mt-3 mb-4">NOW PLAYING</h2>
      <Container fluid className="ms-auto">
        <Row xxl={4} xl={4} lg={3} md={2}>
          {film.map((film, index) => {
            return (
              <div key={index}>
                <Col>
                  <Card style={{ width: "18rem" }} className="m-auto mb-5">
                    <Card.Img variant="top" src={BASEIMAGE + film.poster_path} />
                    <Card.Body>
                      <Card.Title className="text-center fs-6">{film.title}</Card.Title>
                      <Card.Text className="text-center">{film.release_date}</Card.Text>
                      <Button onClick={() => handleClick(film)} className="w-100 mt-2" variant="primary">
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
};

export default ListFilm;
