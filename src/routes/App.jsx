import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/global.css'
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Checkout from '../pages/Checkout';
import CreateAccount from '../pages/CreateAccount';
import Login from '../pages/Login';
import MyAccount from '../pages/MyAccount';
import NewPassword from '../pages/NewPassword';
import Orders from '../pages/Orders';
import PasswordRecovery from '../pages/PasswordRecovery';


const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/passwordrecovery" element={<PasswordRecovery />} />

          <Route path="/newpassword" element={<NewPassword />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/singup" element={<CreateAccount />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>

    </BrowserRouter>
  )
}

export default App;

