import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import NewsCardComponent from './NewsCard';
import FormComponent from './Form';
import { getEverything } from '../Services/apiServices';
import { useDispatch, useSelector } from 'react-redux';
import { setErrorMessage, setSearchParams, setTotalResults } from '../Services/stateService';
import { useParams } from 'react-router-dom';
import './News.scss';

function NewsCroupComponent() {

    const [show, setShow] = useState(false);
    const [articles, setArticles] = useState([]);


    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const { q, lang } = useParams();

    const dispatch = useDispatch();

    const searchParams = useSelector((state) => state.searchParams);

    // useEffect eto React HOOK kotoryi zapuskaetsja posle togo kak pervyi render/otrisovka komponenta proizoshol
    // useEffect prinimajet dva parametra
    // 1 Funkcija kotoruju nuzno zapustit
    // 2 massiv iz peremennyh ot kotoyh budet zaviset dalnejshaja rabota useEffecta
    // vse vnewnii peremennye kotrye my ispolzuem v funkcii dolzny byt v massive v zavisimostej
    // pri ljubyh izmennenijah etih zavisimostei useEffevt zapuskajetsja
    // Pri izmenenii v komponente ne kasajushihsja zavisimostei useEffecta ne zapuskajut useEffect no komponent renderitsja
    // poetomu v njim lu4she rabotat s zaprosami (danne API)
    useEffect(() => {
        if (lang && searchParams.language !== lang) {
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
            <Button variant="outline-primary"  className="mb-2" href="/bitcoin">
            Bitcoin today
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
                setArticles={setArticles}
                searchProps={searchParams}
            />
        </>
    );
}


export default NewsCroupComponent;