import React, { useEffect, useState } from "react";
import { Grid, Button, Box, Typography,TextField } from "@mui/material";
import Navigation from "../Navigation/Navigation";


function SignIn() {
   
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
      <Typography sx={{ml:23}}>Sign in page</Typography>
     </div>
     <div>
      <TextField required variant="outlined" label="Email" name="Email" multiline/>
      <TextField required variant="outlined" label="Password" name="Estimated Production" multiline/>
     </div>
     <div>
      <Button variant="contained" sx={{ml:24}}>Sign In</Button>
     </div>
     </Box>
            );
        }

    export default SignIn;