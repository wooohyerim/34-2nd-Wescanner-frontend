import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import List from './pages/List/List';
import LoginLoading from './pages/Login/LoginLoading';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/list" element={<List />} />
        <Route path="/loginloading" element={<LoginLoading />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
