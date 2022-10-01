import React, { useEffect, useState } from "react";
import { Grid, Button, Box, Typography,TextField } from "@mui/material";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Link
  } from "react-router-dom";


function Navigation(props) {
   
        return (           
    <Box
    sx={{
      display: "flex", gap:5, ml:64
    }}
  >
        <Link to="/application">Application</Link>
        <Link to="/transactions">Transactions</Link>
        <Link to="/home">Home</Link>
     </Box>
            );
        }

    export default Navigation;