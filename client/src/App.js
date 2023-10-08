import './App.css';
import ShowProducts from './components/ShowProducts';
import AddProduct from './components/AddProduct';
import NavBarMenu from './components/NavBarMenu';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBarMenu />  
        <Routes>
          <Route exact path="/" element={<ShowProducts/>} />
          <Route exact path="/addProduct" element={<AddProduct/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
