import React from 'react';
import { Menu, Space} from 'antd';
import { Route, Routes, useNavigate } from 'react-router-dom';
import CustomerListing from './app/modules/customers/pages/CustomerListing.tsx';
import OrderListing from './app/modules/orders/pages/OrderListing.tsx';
import {BookOutlined, UserOutlined} from "@ant-design/icons/lib/icons"
import { Header } from 'antd/es/layout/layout';

const App: React.FC = () => {
 
  const menuList:any = [
    { label: "Customers", key:'/customers', icon:<UserOutlined/>},
    { label: "Orders",  key:'/orders', icon:<BookOutlined/>}
  ]

  const navigate = useNavigate()

  return (
    <div className="App" style={{height:'100vh', backgroundColor:"#001529"}}>
      <div className="Menu">
      <Space direction="horizontal" style={{width: '100%', justifyContent: 'center', backgroundColor:"#001529"}}>
        <Header style={{color:"#fff"}}>Menu</Header>
      </Space>
      <Menu
        items={menuList}
        theme="dark"
        mode = "horizontal"
        onClick={({key})=>{
          navigate(key)
        }}
      />
      </div>
    <Routes>
      <Route path="/customers" element={<CustomerListing/>}/>
      <Route path="/orders" element={<OrderListing/>}/>
    </Routes>
    </div>
  )

};

export default App;
