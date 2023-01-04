import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const Landing = React.lazy(() => import('landing/Module'));

const Products = React.lazy(() => import('products/Module'));

const ProductDetails = React.lazy(() => import('product-details/Module'));

const Cart = React.lazy(() => import('cart/Module'));

const Checkout = React.lazy(() => import('checkout/Module'));

const Authentication = React.lazy(() => import('authentication/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/landing">Landing</Link>
        </li>

        <li>
          <Link to="/products">Products</Link>
        </li>

        <li>
          <Link to="/product-details">ProductDetails</Link>
        </li>

        <li>
          <Link to="/cart">Cart</Link>
        </li>

        <li>
          <Link to="/checkout">Checkout</Link>
        </li>

        <li>
          <Link to="/authentication">Authentication</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="shell" />} />

        <Route path="/landing" element={<Landing />} />

        <Route path="/products" element={<Products />} />

        <Route path="/product-details" element={<ProductDetails />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/authentication" element={<Authentication />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
