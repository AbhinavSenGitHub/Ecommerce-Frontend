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
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fecthItemsByUserIdAsync } from './features/cart/cartSlice';
import { selectLoggedInUser } from './features/auth/authSlice';
import PageNotFound from "../src/features/pages/404"
import OrderSuccessPage from './features/pages/OrderSuccessPage';
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
  {
    path: "/order-success/:id",
    element: <OrderSuccessPage></OrderSuccessPage>
  },
  {
    path: "*",
    element: (<PageNotFound></PageNotFound>)
  },
]);
function App() {
  const user = useSelector(selectLoggedInUser)
  const dispatch = useDispatch()
  useEffect(() => {
  if(user){    
      dispatch(fecthItemsByUserIdAsync(user.id))   
  }
}, [dispatch, user])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
