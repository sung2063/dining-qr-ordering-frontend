/*
 * ------------------------------------------------------------
 * Copyright (c) 2026 Software Bakery Inc.
 * All rights reserved.
 *
 * Company : Software Bakery Inc.
 * Author  : Sung Hyun Back
 * ------------------------------------------------------------
 */
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenuScreen from './features/menu/MenuScreen';
import CartScreen from './features/cart/CartScreen';
import OrderConfirmationScreen from './features/confirmation/OrderConfirmationScreen';
import { CartProvider } from './context/CartContext';
import { MenuProvider } from './context/MenuContext';
import { ToastContainer } from 'react-toastify';
import { NavPath } from './constant/NavPath';

function App() {
  return (
    <>
      <ToastContainer toastClassName="toastAlert" position="bottom-center" hideProgressBar={true} theme="dark" icon={false} />
      <MenuProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path={NavPath.MENU} element={<MenuScreen />} />
              <Route path={NavPath.CART} element={<CartScreen />} />
              <Route path={NavPath.CONFIRMATION} element={<OrderConfirmationScreen />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </MenuProvider>
    </>
  );
}

export default App
