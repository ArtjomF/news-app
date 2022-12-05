import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import noImage from '../dummy-post-horisontal.jpg';

// kak i ljubaja funkcija v JS takze ikomponenty prinimajut props/svojstva (properties)
// komponent mozet prinjat beskone4noe koli4estvo properties no hranit ih v odnoj peremennoj v ka4estve objekta
// Properties perdajutsja vkomponent takze kak HTML elment peredjom atributy.
// <Component prop1={1} prop={2} />
// V komponente props ne mogut menjatsja 
function NewsModalComponent({ setShow, show, article }) {
    const handleClose = () => setShow(false);

    return (
        <>
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>article.title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Figure>
                        <Figure.Image
                            alt=""
                            src={article.urlToImage || noImage}
                        />
                        <Figure.Caption>
                            {article.url}
                        </Figure.Caption>
                    </Figure>
                    <p> {article.content}</p>
                    <Button variant="outline-primary" href={article.url} target="_blank" className="w-100">
                        Read more
                    </Button>
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default NewsModalComponent;