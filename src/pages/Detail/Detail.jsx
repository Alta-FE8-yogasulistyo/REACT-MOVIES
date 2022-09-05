import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import MyNavbar from "../../components/MyNavbar";
const Detail = () => {
  const location = useLocation();
  const DATAS = location.state;
  return (
    <>
      <div>
        <MyNavbar />
        <Container className="mt-5">
          <Row>
            <Col sm>
              <Card style={{ width: "auto" }} className="m-auto mb-4">
                <Card.Img variant="top" src={DATAS.poster} />
                <Card.Body>
                  <Card.Title className="text-center">{DATAS.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="fs-4 fs-auto">
              <p className="fs-1">{DATAS.title}</p>
              <p className="fs-6">{DATAS.titleOri}</p>
              <br />
              <p>RELEASE DATE : {DATAS.title}</p>
              <br />
              <p>ORIGINAL LANGUAGE : "{DATAS.languageOri}"</p>
              <br />
              <p>POPULARITY : {DATAS.popularity}</p>
              <br />
              <p>VOTE AVERAGE : {DATAS.vote}/10</p>
              <p>{DATAS.overview}/10</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Detail;
