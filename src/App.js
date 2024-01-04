import './App.css';
import Home from './features/pages/Home';
import SignupPage from './features/pages/SignupPage';
import LoginPage from './features/pages/LoginPage'
import CartPage from './features/pages/CartPage';
import Checkout from './features/pages/Checkout';
//router
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ProductDetailsPage from './features/pages/ProductDetailsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>
  },
  {
    path: "/checkout",
    element: <Checkout></Checkout>
  },
  {
    path: "/product-details",
    element: <ProductDetailsPage></ProductDetailsPage>
  },
  // {
  //   path: "/order-success",
  //   element: <OrderSuccessPage></OrderSuccessPage>
  // },
  // {
  //   path: "*",
  //   element: (<PageNotFound></PageNotFound>)
  // },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
