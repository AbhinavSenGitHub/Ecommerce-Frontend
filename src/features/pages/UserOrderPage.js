import React from 'react'
import Navbar from "../navbar/Navbar"
import UserOrder from '../user/components/UserOrder'
const UserOrderPage = () => {
  return (
    <div>
      <Navbar><UserOrder></UserOrder></Navbar>
    </div>
  )
}

export default UserOrderPage
