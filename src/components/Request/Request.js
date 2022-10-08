import React, { useEffect, useState } from "react";
import { Grid, Button, Box, Typography,TextField } from "@mui/material";
import Navigation from "../Navigation/Navigation";


function Request() {
   const [userId, setUserId] = useState('')
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
      <Typography sx={{ml:22}}>Request Page</Typography>
     </div>
     <div>
      <TextField required variant="outlined" label="Supplier Address" name="Supplier Address" multiline/>
      <TextField required variant="outlined" label="Product Id" name="Product Id" multiline/>
     </div>
     <div style={{marginLeft:110}}>
      <TextField required variant="outlined" label="Number of Units" name="Number of Units" multiline/>
     </div>
     <div>
      <Button variant="contained" sx={{ml:23}}>Submit</Button>
     </div>
     </Box>
            );
        }

    export default Request;