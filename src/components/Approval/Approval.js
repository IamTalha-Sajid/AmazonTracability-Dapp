import React, { useEffect, useState } from "react";
import { Grid, Button, Box, Typography,TextField } from "@mui/material";
import Navigation from "../Navigation/Navigation";


function Approval() {
   
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
      <Typography sx={{ml:23.5}}>Approval page</Typography>
     </div>
     <div>
      <Button variant="contained" sx={{ml:20, mt:3}}>Approve Request</Button>
     </div>
     </Box>
            );
        }

    export default Approval;