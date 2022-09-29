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
      display: "flex", gap:5, ml:61
    }}
  >
        <Link to="/">Registration</Link>
        <Link to="/requirements">Requirements</Link>
        <Link to="/transactions">Transactions</Link>
     </Box>
            );
        }

    export default Navigation;