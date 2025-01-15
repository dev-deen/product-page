import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import ProductListPage from './pages/ProductListPage';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="products/:id" element={<ProductDetails/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
