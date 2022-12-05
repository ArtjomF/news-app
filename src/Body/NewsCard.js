import { useState } from "react";
import Card from "react-bootstrap/Card";
import noImage from '../dummy-post-horisontal.jpg';
import NewsModalComponent from "./NewsModal";
import moment from "moment";


function NewsCardComponent({ article }) {
// useState = eta funkcija/HOOK pomogaet rabotat s sostjanijem komponeneta
// Sostjanie eto informcija kotruju kopmponent soderzit v sebe.
// Pri izmenenii sostojanija zapuskaetsja novaja otrisovka/render komponenta.
// U Kazdogo sostajanija est svojo izno4alnoje sostojanie i funkcija kotoraja menjaet eto zna4enie
// useState prinimajet kak oargument izna4alnoe zna4enije sostojanija  i vydajot massiv s dvumja zna4enijami
// 1 - izno4alnoe sostojanie
// 2 - funkcyju dlja izmenenija sostojanija 
  const [show, setShow] = useState(false);

// Card component - eto component iz npm paketa react-bootstrab.
// react-bootstrap eto biblioteka s gotovymi komponentami napisanyj s ispolzovanijem bootstram css toolkit
  return (
    <>
      <Card onClick={() => setShow(true)}>
        <Card.Img variant="top" src={article.urlToImage || noImage} />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{article.source.name}</Card.Subtitle>
          <Card.Text dangerouslySetInnerHTML={{ __html: article.description}}>
          </Card.Text>
          {article.author ? (
            <blockquote className="blockquote mb-0">
              <footer className="blockquote-footer">
                <cite title="Author">{article.author}</cite>
              </footer>
            </blockquote>
          ) : ''}

        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{moment(article.publishedAt).format('DD.MM.YYYY')}</small>
        </Card.Footer>
      </Card>
      <NewsModalComponent show={show} setShow={setShow} article={article}/>
    </>
  );
}
export default NewsCardComponent;