import React, { useEffect, useState } from "react";
import { Grid, Button, Box, Typography,TextField } from "@mui/material";
import Navigation from "../Navigation/Navigation";


function Courier() {
   
        return (           
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
      ml:58,
      mt:8
    }}
  >
      <div>
      <Typography sx={{ml:23, mb:5}}>Courier Page</Typography>
     </div>
     <div>
      <Typography sx={{ml:16, mb:3}}>Register your courier company</Typography>
     </div>
     <div>
      <TextField required variant="outlined" label="Courier Address" name="Courier Address" multiline/>
      <TextField required variant="outlined" label="Courier Name" name="Courier Name" multiline/>
     </div>
     <div>
      <Button variant="contained" sx={{ml:23, mt:2}}>Register</Button>
     </div>
     </Box>
            );
        }

    export default Courier;