import React, { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import "./App.css";
import "./index.css";
import icon from './icons/icon/book-32.ico';
import CustomSnackbar from "./components/SnackBar/SnackBar"
import { useApp } from "./AppContext";

function App() {
    const ceo = useApp();
   
        return ( <div >
            <link rel="icon" href={icon} />
            <Home />
            <CustomSnackbar
                message={ceo.state.errorMessage}
                setMessage={ceo.actions.setErrorMessage}
              />
            </div>);
        }

    export default App;