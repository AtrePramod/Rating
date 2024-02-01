
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Products from './components/Products';
import ProductInfo from './components/ProductInfo';


function App() {



  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/:id/productdetails' element={<ProductInfo />} />
      </Routes>
    </div >
  );
}

export default App;
