import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import NewsCardComponent from './NewsCard';
import FormComponent from './Form';
import { getEverything } from '../Services/apiServices';
import './News.scss';
import { useDispatch } from 'react-redux';
import{ setErrorMessage } from '../Services/stateService';

function NewsCroupComponent(props) {
    const [show, setShow] = useState(false);
    const [articles, setArticles] = useState([]);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const dispatch = useDispatch();

    useEffect(() => {
        (async function () {
            try {
                const response = await getEverything(props);
                const responseData = await response.json();
                if (responseData.status === 'error') {
                    throw responseData;
                }
                setArticles(responseData.articles);
            } catch (error) {
                dispatch(setErrorMessage(error.message));
            }

        })();
    }, [props, dispatch]);

    return (
        <>
            <Button variant="outline-primary" onClick={handleShow} className="mb-2">
                Search
            </Button>
            <Row xs={1} md={2} lg={3} className="g-2">
                {articles.map((article, idx) => (
                    <Col key={idx}>
                        <NewsCardComponent article={article} />
                    </Col>
                ))}
            </Row>
            <FormComponent
                show={show}
                handleClose={handleClose}
                setFormResponse={setArticles}
                searchProps={props}
            />
        </>
    );
}


export default NewsCroupComponent;