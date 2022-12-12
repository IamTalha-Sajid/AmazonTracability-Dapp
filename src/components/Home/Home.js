import React, { useEffect, useState } from "react";
import { Grid, Button, Box, Typography,TextField } from "@mui/material";
import Navigation from "../Navigation/Navigation";
import { useHistory, Link } from 'react-router-dom';


function Home() {
   
        return (           
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
      ml:46,
      mt:8
    }}
  >
      <div>
      <Typography sx={{ml:15, mb:3}}>Welcome to Amazon Traceability Program</Typography>
     </div>
     <div>
      <Button component={Link} to="/retailer" variant="contained" sx={{ml:22.7, mb:3}}>Enroll as a Seller</Button>
     </div>
     </Box>
            );
        }

    export default Home;