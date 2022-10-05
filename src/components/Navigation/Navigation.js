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
      display: "flex", gap:5, ml:59, mt: 2
    }}
  >
        <Link to="/retailer">Retailer</Link>
        <Link to="/request">Request</Link>
        <Link to="/home">Home</Link>
        <Link to="/approval">Approval</Link>
        <Link to="/courier">Courier</Link>
        <Button variant="contained" sx={{ml:23}}>Connect Wallet</Button>
     </Box>
            );
        }

    export default Navigation;