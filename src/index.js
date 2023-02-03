import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Add from "./components/Add";
import Description from "./components/Description";
import { isExpired } from "react-jwt";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="signup" element={isExpired(localStorage.getItem('token')) ?  <Signup/> :<Navigate replace to="/"/>} />
        <Route path="signin" element={isExpired(localStorage.getItem('token')) ?  <Signin/>: <Navigate replace to="/"/>} />
        <Route path="add" element={isExpired(localStorage.getItem('token')) ?  <Navigate replace to="/"/> :<Add />} />
        <Route path="description" element={<Description />} />
      </Routes>



    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
