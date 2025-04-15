import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { CreateProduct } from './pages/CreateProduct/CreateProduct';
import { ProductCard } from './pages/ProductCard/ProductCard';
import { Home } from './pages/Home/Home';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="create-product" element={<CreateProduct />} />
          <Route path="product-card" element={<ProductCard />} />
          {/* <Route path="product-card/:productId" element={<ProductCard />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};
