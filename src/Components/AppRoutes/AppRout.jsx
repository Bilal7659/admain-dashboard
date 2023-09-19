import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../../Pages/Dashbord/Home'
import Inventory from '../../Pages/Inventory/Inventory'
import Order from '../../Pages/Order/Order'
import Customer from '../../Pages/Customer/Customer'
const AppRout = () => {
  return (
    <div>
          <Routes>
      <Route path='/' element = {<Home/>}></Route>
      <Route path='/inventory' element = {<Inventory/>}></Route>
      <Route path='/order' element = {<Order/>}></Route>
      <Route path='/customer' element = {<Customer/>}></Route>
    </Routes>
    </div>
  )
}

export default AppRout
