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
import UserOrderPage from './features/pages/UserOrderPage';
import UserProfilePage from './features/pages/UserProfilePage';
import { fetchLoggedInUserAsync } from './features/user/userSlice';
import Logout from './features/auth/components/Logout';
import ForgotPasswordPage from './features/pages/ForgotPasswordPage';
import ProtectedAdmin from '../src/features/auth/components/Protected';
import AdminProductDetailsPage from './features/pages/AdminProductDetailsPage';
import AdminHome from './features/pages/AdminHome';
import AdminProductFormPage from './features/pages/AdminProductFormPage';
import AdminOrderPage from './features/pages/AdminOrderPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Protected><Home></Home></Protected>
  },
  {
    path: "/admin",
    element: <ProtectedAdmin><AdminHome></AdminHome></ProtectedAdmin>
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
    path: "/admin/product-details/:id",
    element: <ProtectedAdmin><AdminProductDetailsPage></AdminProductDetailsPage></ProtectedAdmin>
  },
  {
    path: "/admin/product-form",
    element: <ProtectedAdmin><AdminProductFormPage></AdminProductFormPage></ProtectedAdmin>
  },
  {
    path: "/admin/product-form/edit/:id",
    element: <ProtectedAdmin><AdminProductFormPage></AdminProductFormPage></ProtectedAdmin>
  },
  {
    path: "/admin/orders",
    element: <ProtectedAdmin><AdminOrderPage></AdminOrderPage></ProtectedAdmin>
  },
  {
    path: "/order-success/:id",
    element: <OrderSuccessPage></OrderSuccessPage>
  },
  {
    path: "/orders",
    element: <Protected><UserOrderPage></UserOrderPage></Protected>
  },
  {
    path: "/profile",
    element: <Protected><UserProfilePage></UserProfilePage></Protected>
  },
  {
    path: "/logout",
    element: <Logout></Logout>
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage></ForgotPasswordPage>
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
      dispatch(fetchLoggedInUserAsync(user.id))
  }
}, [dispatch, user])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
