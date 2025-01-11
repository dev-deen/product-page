import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ProductListPage from './pages/ProductListPage';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={ProductListPage}/>
          <Route path="producs/:id" element={ProductDetails}/>
        </Routes>
      </Router>
      <ProductListPage/>
    </div>
  );
}

export default App;
