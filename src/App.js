import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NewsCroupComponent from './Body';
import PaginationComponent from './Footer';
import HeaderComponent from './Header';
import ErrorModalComponent from './ErrorModal';


function App() {

  return (
    <Container>
      <HeaderComponent />
      <NewsCroupComponent />
      <PaginationComponent />
      <ErrorModalComponent/>
    </Container>
  );
}

export default App;
