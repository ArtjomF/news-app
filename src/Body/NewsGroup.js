
import CardGroup from 'react-bootstrap/CardGroup';
import NewsCardComponent from './NewsCard';

function NewsCroupComponent() {
    return (
        <CardGroup>
            <NewsCardComponent />
            <NewsCardComponent />
            <NewsCardComponent />
        </CardGroup>
    );
}

export default NewsCroupComponent;