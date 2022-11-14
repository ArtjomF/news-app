import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import NewsCardComponent from './NewsCard';
import './News.scss';
import FormComponent from './Form';

function NewsCroupComponent() {
    const [show, setShow] = useState(false);
    const [formResponse, setFormResponse] = useState(null);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <Button variant="outline-primary" onClick={handleShow} className="mb-2">
                Search
            </Button>
            <Row xs={1} md={2} lg={3} className="g-2">
                {formResponse?.articles.map((article, idx) => (
                    <Col key={idx}>
                        <NewsCardComponent article={article}/>
                    </Col>
                ))}
            </Row>
            <FormComponent show={show} handleClose={handleClose} setFormResponse={setFormResponse} />
        </>
    );
}

export default NewsCroupComponent;