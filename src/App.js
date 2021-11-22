import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Components/pages/Home';
import Company from './Components/pages/Company';
import Contact from './Components/pages/Contact';
import NewProject from './Components/pages/NewProject';
import Container from './Components/layout/Container'

function App() {
  return (
    <Router>
      <div>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/newproject">Novo Projeto</Link>
        <li>Home</li>
        <li>Contato</li>
      </ul> 
      </div>
      
       

    <Container customClass = "min-height"> 
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/Company" element={<Company />} />
    <Route exact path="/Contact" element={<Contact/>} />
    <Route exact path="/NewProject" element={<NewProject/>} />
    </Routes>
    </Container>
    <p>footer</p>
    
        
     
  </Router>
  
  
  );
}

export default App;
