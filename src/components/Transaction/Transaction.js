import React, { useEffect, useRef, useState } from "react";
import { Grid, Button, Box, Typography, TextField } from "@mui/material";
import Navigation from "../Navigation/Navigation";
import Web3Modal from "web3modal";
import Web3 from 'web3';
import { providers, Contract } from "ethers";


function Transaction() {

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        ml: 50,
        mt: 8
      }}
    >
      <div>
        <Typography sx={{ ml: 23, mb: 5 }}>All Transactions are here</Typography>
      </div>
      
    </Box>
  );
}

export default Transaction;