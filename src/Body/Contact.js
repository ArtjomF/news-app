import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function ContactComponent() {
    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title>Hello to everybody!</Card.Title>
                <Card.Text>
                    This project was build by React.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>My name is Artjom Filimonov</ListGroup.Item>
                <ListGroup.Item>Tallinn, Estonia</ListGroup.Item>
                <ListGroup.Item>artjomf@gmail.com</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default ContactComponent;