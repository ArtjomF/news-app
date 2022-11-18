import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NewsCroupComponent from './Body';
import PaginationComponent from './Footer';
import HeaderComponent from './Header';
import moment from 'moment';
import ErrorModalComponent from './ErrorModal';

function App(props) {

  return (
    <Container>
      <HeaderComponent />
      <NewsCroupComponent {...props} />
      <PaginationComponent />
      <ErrorModalComponent/>
    </Container>
  );
}

App.defaultProps = {
  q: 'estonia',
  from: moment().format("YYYY-MM-DDT00:00:00.000"),
  to: moment().format("YYYY-MM-DDT23:59:59.999"),
  language: 'en',
  searchIn: 'title,description,content',
  pageSize: 12,
  page: 1,
}

export default App;
