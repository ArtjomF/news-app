import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NewsCroupComponent from './Body/NewsGroup';
import HeaderComponent from './Body/header';

function App() {
  return (
    <Container>
      <HeaderComponent />
      <NewsCroupComponent />
    </Container>
  );
}

export default App;
