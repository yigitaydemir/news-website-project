import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const News = (props) => {
  return (
    <Card style={{ width: "18rem", margin: "5px" }}>
      <Card.Img
        variant="top"
        src={props.img}
        style={{ height: "180px" }}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
        <Button variant="primary">
          <a
            href={props.url}
            target="blank"
            className="nav-link"
            style={{ alignSelf: "flex-end" }}
          >
            Read More
          </a>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default News;