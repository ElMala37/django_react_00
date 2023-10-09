import './App.css';
import ShowProducts from './components/ShowProducts';
import AddProduct from './components/AddProduct';
import NavBarMenu from './components/NavBarMenu';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBarMenu />  
        <Routes>
          <Route exact path="/" element={<ShowProducts/>} />
          <Route exact path="/addProduct" element={<AddProduct/>} />
          <Route exact path="/:id/" element={<ProductDetail/>} />
          <Route exact path="/:id/update" element={<UpdateProduct/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
