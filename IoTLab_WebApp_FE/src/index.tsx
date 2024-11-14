import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.css';
import { Provider } from 'react-redux';
import { store } from './redux/configStore';
import {
  unstable_HistoryRouter as HistoryBrowser,
  Route,
  Routes
} from 'react-router-dom';
import { history } from './config/config';
import { Login } from './pages/login/Login';
import { Home } from './pages/home/Home';

import AuthGuard from './components/AuthGuard';
import AdminPage from './pages/admin/AdminPage';

import AccountPage from './pages/Account/Account';
import ContactPage from './pages/contact/Contact';
import AboutPage from './pages/About/About';
import OpenKitBPage from './pages/OpenKitB/OpenKitB';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <HistoryBrowser history={ history as any}>
      <Routes>
        <Route path="" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>

        <Route path='/admin' element={<AdminPage />}></Route>

        <Route path="/about" element={<AboutPage />}></Route>

        <Route path="/open-kit" element={<OpenKitBPage />}></Route>

        <Route path="/account" element={<AccountPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>

      </Routes>
    </HistoryBrowser>
  </Provider >
);

