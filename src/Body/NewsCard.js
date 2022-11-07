import { useState } from "react";
import Card from "react-bootstrap/Card";
import noImage from '../dummy-post-horisontal.jpg';
import NewsModalComponent from "./NewsModal";

function NewsCardComponent() {

  const [show, setShow] = useState(false);

  return (
    <>
      <Card onClick={() => setShow(true)}>
        <Card.Img variant="top" src={noImage} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Source Name</Card.Subtitle>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante

          </Card.Text>
          <blockquote className="blockquote mb-0">
            <footer className="blockquote-footer">
              <cite title="Author">Author</cite>
            </footer>
          </blockquote>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Published At</small>
        </Card.Footer>
      </Card>
      <NewsModalComponent show={show} setShow={setShow}/>
    </>
  );
}
export default NewsCardComponent;