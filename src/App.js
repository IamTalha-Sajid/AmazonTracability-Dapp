import React, { useEffect, useState } from "react";
import Registration from "./components/Registration/Regsitration";
import Retailer from "./components/Retailer/Retailer";
import Request from "./components/Request/Request";
import Navigation from "./components/Navigation/Navigation";
import Courier from "./components/Courier/Courier";
import Approval from "./components/Approval/Approval";
import Home from "./components/Home/Home";
import "./App.css";
import "./index.css";
import icon from './icons/icon/book-32.ico';
import CustomSnackbar from "./components/SnackBar/SnackBar"
import { useApp } from "./AppContext";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Link
  } from "react-router-dom";

function App() {
    const ceo = useApp();
   
        return (
          <>
          <Router>
      <Routes>
        <Route 
        path="/home" 
        element={
          <>
        <Home />
        </>
        } />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route 
        path="/retailer" 
        element={
          <>
          <Navigation />
        <Retailer />
        </>} />
         <Route 
        path="/request" 
        element={
          <>
          <Navigation />
        <Request />
        </>} />
        <Route 
        path="/approval" 
        element={
          <>
          <Navigation />
          <Approval />
        </>} />
        <Route 
        path="/courier" 
        element={
          <>
          <Navigation />
          <Courier />
        </>} />
            </Routes>
            </Router>

      <CustomSnackbar
      message={ceo.state.errorMessage}
      setMessage={ceo.actions.setErrorMessage}
      />
      </>
            );
        }

    export default App;