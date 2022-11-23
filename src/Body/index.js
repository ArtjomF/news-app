import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import NewsCardComponent from './NewsCard';
import FormComponent from './Form';
import { getEverything } from '../Services/apiServices';
import { useDispatch, useSelector } from 'react-redux';
import{ setErrorMessage, setSearchParams, setTotalResults } from '../Services/stateService';
import { Link, useParams } from 'react-router-dom';
import './News.scss';

function NewsCroupComponent() {

    const [show, setShow] = useState(false);
    const [articles, setArticles] = useState([]);
    

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const { q, lang } = useParams();

    const dispatch = useDispatch();

    const searchParams = useSelector((state) => state.searchParams);

    useEffect(() => {
        if(lang && searchParams.language !== lang){
            dispatch(setSearchParams({
                ...searchParams,
                language: lang,
            }));
            return;
        }
        (async function () {
            try {
                const response = await getEverything({
                    ...searchParams,
                    q: q || searchParams.q,
                    });
                const responseData = await response.json();
                if (responseData.status === 'error') {
                    throw responseData;
                }
                setArticles(responseData.articles);
                dispatch(setTotalResults(responseData.totalResults));
            } catch (error) {
                dispatch(setErrorMessage(error.message));
            }

        })();
    }, [searchParams, dispatch, q, lang]);

    return (
        <>
            <Button variant="outline-primary" onClick={handleShow} className="mb-2">
                Search
            </Button>
            <Link to="/bitcoin">Bitcoin today</Link>
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
                setArticles={setArticles}
                searchProps={searchParams}
            />
        </>
    );
}


export default NewsCroupComponent;