import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { selectLoggedInUser } from '../authSlice'

const ProtectedAdmin = ({children}) => {
    const user = useSelector(selectLoggedInUser)
    if(!user){
        return <Navigate to="/login" replace={true}></Navigate>     // if user not found then <Navigate></Navigate> is tag that comes from react-router-dom to redirect to the login page.
      }
    if(user && user.role !== 'admin'){
        return <Navigate to="/" replace={true}></Navigate>     // if user not found then <Navigate></Navigate> is tag that comes from react-router-dom to redirect to the login page.
      }
      return children
}
export default ProtectedAdmin
