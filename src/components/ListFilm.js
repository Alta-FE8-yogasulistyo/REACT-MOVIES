// import React, { Component } from "react";
// import { Card, Container, Row, Col, Button } from "react-bootstrap";
// import axios from "axios";
// import withRouter from "../withRouter";

// const BASEURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=3812e9c1284f7c1d1663a94152f486fa&language=en-US&page=1";
// const BASEIMAGE = "https://image.tmdb.org/t/p/original";

// class ListFilm extends Component {
//   state = {
//     film: [],
//   };
//   // Fetching API
//   componentDidMount() {
//     axios
//       .get(`${BASEURL}`)
//       .then((respon) => {
//         this.setState({
//           film: respon.data.results,
//         });
//         console.log(respon.data.results);
//       })
//       .catch((err) => console.log(err));
//   }

//   // Get Detail
//   handleDetail(data) {
//     this.props.navigate("/detail", {
//       state: {
//         titleOri: data.original_title,
//         title: data.title,
//         overview: data.overview,
//         release: data.release_date,
//         vote: data.vote_average,
//         languageOri: data.original_language,
//         popularity: data.popularity,
//         poster: BASEIMAGE + data.poster_path,
//       },
//     });
//   }

//   render() {
//     return (
//       <>
//         <h1 className="text-center mt-4 mb-5                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ">
//           {this.props.judul1}
//         </h1>

//         <Container fluid className="ms-auto">
//           <Row xxl={4} xl={4} lg={3} md={2}>
//             {this.state.film.map((data, index) => {
//               return (
//                 <div key={index}>
//                   <Col>
//                     <Card style={{ width: "20rem" }} className="m-auto mb-5">
//                       <Card.Img variant="top" src={BASEIMAGE + data.poster_path} />
//                       <Card.Body>
//                         <Card.Title className="text-center fs-6">{data.title}</Card.Title>
//                         <Card.Text className="text-center">{data.release_date}</Card.Text>
//                         <Button onClick={() => this.handleDetail(data)} className="w-100 mt-2" variant="outline-info">
//                           Detail Movie
//                         </Button>
//                       </Card.Body>
//                     </Card>
//                   </Col>
//                 </div>
//               );
//             })}
//           </Row>
//         </Container>
//       </>
//     );
//   }
// }

// export default withRouter(ListFilm);

// Version Hook

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
    this.props.navigate("/detail", {
      state: {
        titleOri: data.original_title,
        title: data.title,
        overview: data.overview,
        release: data.release_date,
        vote: data.vote_average,
        languageOri: data.original_language,
        popularity: data.popularity,
        poster: BASEIMAGE + data.poster_path,
      },
    });
  }

  render() {
    return (
      <>
        <h1 className="text-center mt-4 mb-5                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ">
          {this.props.judul1}
        </h1>

        <Container fluid className="ms-auto">
          <Row xxl={4} xl={4} lg={3} md={2}>
            {this.state.film.map((data, index) => {
              return (
                <div key={index}>
                  <Col>
                    <Card style={{ width: "20rem" }} className="m-auto mb-5">
                      <Card.Img variant="top" src={BASEIMAGE + data.poster_path} />
                      <Card.Body>
                        <Card.Title className="text-center fs-6">{data.title}</Card.Title>
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
