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
import Protected from "../src/features/auth/components/Protected"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Protected><Home></Home></Protected>
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
    element: <Protected><CartPage></CartPage></Protected> 
  },
  {
    path: "/checkout",
    element: <Protected><Checkout></Checkout></Protected>
  },
  {
    path: "/product-details/:id",
    element: <Protected><ProductDetailsPage></ProductDetailsPage></Protected>
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
