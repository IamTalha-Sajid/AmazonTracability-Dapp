import React, { useEffect, useState } from "react";
import { Grid, Button, Box, Typography,TextField } from "@mui/material";
import Navigation from "../Navigation/Navigation";


function Retailer() {
   
        return (           
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
      ml:42,
      mt:8
    }}
  >
      <div>
      <Typography sx={{ml:31.5, mb:5}}>Seller Registration Page</Typography>
     </div>
     <div>
      <Typography sx={{ml:33, mb:3}}>Fill out your details</Typography>
     </div>
     <div>
      <TextField required variant="outlined" label="Supplier Address" name="Supplier Address" multiline/>
      <TextField required variant="outlined" label="Your Store Name" name="Your Store Name" multiline/>
      <TextField required variant="outlined" label="Supplier Name" name="Supplier Name" multiline/>
     </div>
     <div>
      <Button variant="contained" sx={{ml:36, mt:2}}>Register</Button>
     </div>
     </Box>
            );
        }

    export default Retailer;