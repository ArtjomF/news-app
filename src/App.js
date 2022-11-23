import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NewsCroupComponent from './Body';
import PaginationComponent from './Footer';
import HeaderComponent from './Header';
import ErrorModalComponent from './ErrorModal';
import ContactComponent from './Body/Contact';
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <Container>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={
          <>
            <NewsCroupComponent />
            <PaginationComponent />
          </>
        } />
        <Route path="/:q" element={
          <>
            <NewsCroupComponent />
            <PaginationComponent />
          </>
        } />
        <Route path="/lang/:lang" element={
          <>
            <NewsCroupComponent />
            <PaginationComponent />
          </>
        } />
        <Route path="/contact" element={<ContactComponent />} />
      </Routes>
      <ErrorModalComponent />
    </Container>
  );
}

export default App;
