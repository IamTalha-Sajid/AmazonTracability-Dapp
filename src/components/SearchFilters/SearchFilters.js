import React, { useState, useEffect, useRef } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useApp } from "../../AppContext";
import manager from "../../helpers/manager";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "apiProducer",
  "fpManufacturer",
  "fpImporter",
  "distributor",
  "retailer",
  "healthServiceProvider",
  "patient"
];

export default function MultipleSelectCheckmarks(props) {
  const ceo = useApp();
  const [dictName, setDictName] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    // ceo.state.filters['UserType'] = names
    console.log("DATA IN FILTER USEEFFECT",ceo.state.filters)
    if(ceo.state.filters !== null){
    ceo.state.filters[0] === "apiProducer" ? ceo.state.attributes.UserType = 0 : 
    ceo.state.filters[0] === "fpManufacturer" ? ceo.state.attributes.UserType = 1 :
    ceo.state.filters[0] === "fpImporter" ? ceo.state.attributes.UserType = 2 :
    ceo.state.filters[0] === "distributor" ? ceo.state.attributes.UserType = 3 :
    ceo.state.filters[0] === "retailer" ? ceo.state.attributes.UserType = 4 :
    ceo.state.filters[0] === "healthServiceProvider" ? ceo.state.attributes.UserType = 5 :
    ceo.state.filters[0] === "patient" ? ceo.state.attributes.UserType = 6 :
    ceo.state.attributes.UserType = null
  }
  console.log("DATA IN ATTRIBUTES USEEFFECT",ceo.state.attributes)
    },[ceo.state.filters]);

    // useEffect(() => {
    //   if(ceo.state.result2 !== ""){
    //   ceo.actions.setLoading(false)
    //   }
    //   console.log("SEARCH RESULT",ceo.state.result2)
    // },[ceo.state.result2]);

  // useEffect(() => {
  //   if(ceo.state.counter !== 0 && ceo.state.translate !== ""){
  //     manager.searching(ceo.state.translate, ceo.state.filters, ceo.actions.setCounter, ceo.actions.setResult2)
  //   } 
  // },[ceo.state.counter]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    console.log("FILTERED VALUE", value);
    if (value.includes("None")) {
      setDictName([]);
      ceo.state.filters['UserType'] = names
      // ceo.actions.setFilters({});
    } else {
      setDictName(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
      ceo.state.filters = typeof value === "string" ? value.split(",") : value
    }
    setOpen(false);
    console.log("DATA IN FILTER",ceo.state.filters)
  };

  return (
    <Box
      style={{
        display: "flex",
        marginLeft:180
      }}
    >
      <FormControl sx={{ m: 1, width: "24vw" }}>
        <InputLabel id="demo-controlled-open-select-label">User Type</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={dictName}
          onChange={handleChange}
          input={<OutlinedInput label="User Type" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={dictName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
