import React, { useEffect, useState } from "react";
import { Grid, Button, Box, Typography,TextField } from "@mui/material";
import Navigation from "../Navigation/Navigation";


function Requirements() {
   
        return (           
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
      ml:40,
      mt:8
    }}
  >
    <div>
      <Typography sx={{ml:35}}>Requirements Page</Typography>
     </div>
     </Box>
            );
        }

    export default Requirements;