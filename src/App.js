import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NewsCroupComponent from './Body';
import PaginationComponent from './Footer';
import HeaderComponent from './Header';
import ErrorModalComponent from './ErrorModal';
import ContactComponent from './Body/Contact';
import { Routes, Route } from 'react-router-dom';

// Komponenty v React eto oby4nye JS funkcii kotorye vozvrawajut JSX/React element;
function App() {

  // JSX eto novyi sintex ot React kotoryi sovmewajet JS i HTML v udobnom vide.
  // JSX/React element imeet pravilo: vozvrawaetsja tolko odin element ili komponent. Odin glavnyi i beskone4noe koli4estvo vtorostepennyh. 
  // V JSX otribut class ppereiminovan v className. 
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
