import React from "react";
import { useFavContext } from "../../context/FavoritesProvider";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const BASEIMAGE = "https://image.tmdb.org/t/p/original";

const Favorit = () => {
  const { fav } = useFavContext();
  return (
    <div>
      <h2 className="text-center mt-3 mb-4">Favorit List</h2>
      <Container fluid className="ms-auto">
        <Row xxl={4} xl={4} lg={3} md={2}>
          {fav.map((item, index) => {
            return (
              <div key={index}>
                <Col>
                  <Card style={{ width: "18rem" }} className="m-auto mb-5">
                    <Card.Img variant="top" src={BASEIMAGE + item.poster_path} />
                    <Card.Body>
                      <Card.Title className="text-center fs-6">{item.title}</Card.Title>
                      <Card.Text className="text-center">{item.release_date}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Favorit;
