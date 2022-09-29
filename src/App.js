import React, { useEffect, useState } from "react";
import Registration from "./components/Registration/Regsitration";
import Requirements from "./components/Requirements/Requirements";
import Transactions from "./components/Transactions/Transactions";
import Navigation from "./components/Navigation/Navigation";
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
        path="/registration" 
        element={
          <>
          <Navigation />
        <Registration />
        </>
        } />
        <Route path="/" element={<Navigate replace to="/registration" />} />
        <Route 
        path="/requirements" 
        element={
          <>
          <Navigation />
        <Requirements />
        </>} />
        <Route 
        path="/transactions" 
        element={
          <>
          <Navigation />
        <Transactions />
        </>} />

          {/* <Link to="/">
          <Registration />
          </Link>
          <Link to="/requirements">
          <Requirements />
          </Link> */}
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