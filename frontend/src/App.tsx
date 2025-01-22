import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import './i18n';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Category from '@components/Category';
import Product from '@components/Product';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="category/:categoryId" element={<Category />} />
        <Route path="/c/:categoryId/p/:productId" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
