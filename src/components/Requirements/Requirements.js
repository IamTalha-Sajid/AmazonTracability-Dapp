import React, { useEffect, useState } from "react";
import { Grid, Button, Box, Typography,TextField } from "@mui/material";
import Navigation from "../Navigation/Navigation";


function Requirements() {
   
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
      <Typography sx={{ml:20}}>Requirements Page</Typography>
     </div>
     <div>
      <TextField required variant="outlined" label="Quantity" name="Quantity" multiline/>
      <TextField required variant="outlined" label="Estimated Production" name="Estimated Production" multiline/>
     </div>
     <div>
      <Button variant="contained" sx={{ml:23}}>Submit</Button>
     </div>
     </Box>
            );
        }

    export default Requirements;