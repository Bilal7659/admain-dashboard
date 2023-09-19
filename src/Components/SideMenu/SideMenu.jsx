import React from 'react'
import { ShopOutlined,AppstoreAddOutlined,ShoppingCartOutlined,UserOutlined } from '@ant-design/icons'
import './SideBar.css'
import { Menu, Select } from 'antd'
import { useNavigate } from 'react-router-dom'
const SideMenu = () => {

  const navigate = useNavigate()               //navigation hooks
  return (
    <div className='sideMenu'>
      <Menu className='main-sideManu'
               mode='vertical'
        onClick={(item) =>{
               navigate(item.key)}}
           items={[
            {
              label : 'Dashboard',
              icon : <AppstoreAddOutlined   />,
              key : '/'
            },
            {
              label : 'Inventery',
              icon : <ShopOutlined />,
              key : '/inventory'
            },
            {
              label : 'Orders',
              icon : <ShoppingCartOutlined />,
              key : '/order'
            },
            {
              label : 'Customers',
              icon : <UserOutlined />,
              key : '/customer'
            },

           ]}
           ></Menu>
    </div>
  )
}

export default SideMenu
