import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { CreateProduct } from './components/CreateProduct/CreateProduct';
import { ProductCard } from './pages/ProductCard/ProductCard';
import { Home } from './pages/Home/Home';
import { ProductDetails } from './pages/ProductCard/ProductDetails/ProducrDetails';
import { Products } from './pages/Products/Products';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="products/create" element={<CreateProduct />} />
          <Route path="products/basket" element={<ProductCard />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </Router>
  );
};
