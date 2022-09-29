import React, { useEffect, useState } from "react";
import { Grid, Button, Box, Typography,TextField } from "@mui/material";
import Navigation from "../Navigation/Navigation";


function Transactions() {
   
        return (           
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
      ml:55,
      mt:8
    }}
  >
    <div>
      <Typography sx={{ml:20}}>Transactions Page</Typography>
     </div>
     <div>
      <TextField required variant="outlined" label="Customer Number" name="Customer Number" multiline/>
      <TextField required variant="outlined" label="License Number" name="License Number" multiline/>
     </div>
     <div>
      <Button variant="contained" sx={{ml:23}}>Submit</Button>
     </div>
     <div style={{marginLeft:110}}>
      <TextField required variant="outlined" label="Quantity Transferred" name="Quantity Transferred" multiline/>
     </div>
     <div>
      <Button variant="contained" sx={{ml:23}}>Submit</Button>
     </div>
     <div style={{marginLeft:110}}>
      <TextField required variant="outlined" label="Barcode Number" name="Barcode Number" multiline/>
     </div>
     <div>
      <Button variant="contained" sx={{ml:23}}>Submit</Button>
     </div>
     </Box>
            );
        }

    export default Transactions;