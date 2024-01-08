import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectLoggedInUser } from '../authSlice'
import { Navigate } from 'react-router-dom'

const Logout = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectLoggedInUser)
  return (
    <div>
      {!user && <Navigate to='/login'></Navigate>}
    </div>
  )
}

export default Logout
