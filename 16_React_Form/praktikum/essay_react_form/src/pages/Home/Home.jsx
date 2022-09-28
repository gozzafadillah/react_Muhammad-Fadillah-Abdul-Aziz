import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Container>
        <h1 className="text-center my-5">HomePage</h1>
        <Row className="justify-content-center">
          <Col md="4" className="my-4 py-2">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://source.unsplash.com/720x460/?google"
              />
              <Card.Body>
                <Card.Title>Google</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  recusandae eos numquam, blanditiis repellat quo!
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4" className="my-4 py-2">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://source.unsplash.com/720x460/?golang"
              />
              <Card.Body>
                <Card.Title>Golang</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fuga, quaerat illum maiores enim earum adipisci.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4" className="my-4 py-2">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://source.unsplash.com/720x460/?javascript"
              />
              <Card.Body>
                <Card.Title>Developer</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores dolorem eaque eligendi dolorum, non laboriosam?
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4" className="my-4 py-2">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://source.unsplash.com/720x460/?developer"
              />
              <Card.Body>
                <Card.Title>IT Coding</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  optio ab, magnam aut laudantium accusamus.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
