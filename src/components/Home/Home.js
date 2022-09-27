import React, { useState, useEffect, useRef } from "react";
import { Grid, Button, Box, Typography,TextField } from "@mui/material";
import logo from "../assets/Dictionaries Logo.png";
import { useApp } from "../../AppContext";
import SearchButtons from "../SearchButtons/SearchButtons";
import SearchFilters from "../SearchFilters/SearchFilters";
import CircularProgress from '@mui/material/CircularProgress';
import Web3Modal from "web3modal";
import { providers, Contract } from "ethers";
import { TOKEN_ADDRESS, abi } from "../../constants/constants"

function Home() {
  // const [walletConnected, setWalletConnected] = useState(false);
  const [claimedReward, setclaimedReward] = useState(false);
  // loading is set to true when we are waiting for a transaction to get mined
  const web3ModalRef = useRef();
  const ceo = useApp();
  const [click, setClick] = useState(0)
  const [temp, setTemp] = useState({Entity: "", NTN: "", Country: "", City: "",
Name: "", Contact: "", Mail: "", Password: "", FeeDetail: "", UserType: null})



// useEffect(() => {
//   // if wallet is not connected, create a new instance of Web3Modal and connect the MetaMask wallet
//   if (!walletConnected) {
//     // Assign the Web3Modal class to the reference object by setting it's `current` value
//     // The `current` value is persisted throughout as long as this page is open
//     web3ModalRef.current = new Web3Modal({
//       network: "goerli",
//       providerOptions: {},attributes
//       disableInjectedProvider: false,
//     });
//     connectWallet();
//   }
// }, [walletConnected]);

useEffect(() => {
  // getProviderOrSigner(false)
  if(click !== 0){
    if(ceo.state.attributes.UserType === null){
      ceo.actions.setErrorMessage("Fill all required fields")
    }
    else{
  connectWallet()
  register(ceo.state.attributes)
}
  console.log("ATTRIBUTE STATE IN USE EFFECT", ceo.state.attributes, ceo.state.attributes.UserType)
}
}, [click]);

const connectWallet = async () => {
  try {
    // Get the provider from web3Modal, which in our case is MetaMask
    // When used for the first time, it prompts the user to connect their wallet
    await getProviderOrSigner();
    // setWalletConnected(true);

  } catch (err) {
    console.error(err);
  }
};


const changeNetwork = async () => {
  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x5' }],
    });
  } catch (error){
    console.log(error);
  }
};

const register = async (attributes) => {
  try {
    // We will need the signer later to get the user's address
    // Even though it is a read transaction, since Signers are just special kinds of Providers,
    // We can use it in it's place
    const signer = await getProviderOrSigner(true);
    const tokenContract = new Contract(
      TOKEN_ADDRESS,
      abi,
      signer
    );
    // Get the address associated to the signer which is connected to  MetaMask
    // const address = await signer.getAddress();
    // call the whitelistedAddresses from the contract
    const _rewardedUser = await tokenContract.addUser(attributes);
  } catch (err) {
    console.log(err);
  }
};

const getProviderOrSigner = async (needSigner = false) => {
  // Connect to Metamask
  // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object
  const provider = await web3ModalRef.current.connect();
  const web3Provider = new providers.Web3Provider(provider);

  // If user is not connected to the Rinkeby network, let them know and throw an error
  const { chainId } = await web3Provider.getNetwork();
  if (chainId !== 5) {
    changeNetwork()
  }

  if (needSigner) {
    const signer = web3Provider.getSigner();
    return signer;
  }
  return web3Provider;
};

const handleSubmit = (evt) =>{
evt.preventDefault();
setClick(Math.random())
console.log("Debug filters", ceo.state.filters)
var value
var values = []
for(var key in ceo.state.attributes) {
  value = ceo.state.attributes[key];
  values.push(value)
}
// if(ceo.state.attributes.UserType !== null)
// values.push(ceo.state.attributes.UserType)
if(values.includes("")){
  ceo.actions.setErrorMessage("Fill all required fields")
  console.log(values)
}
else{
  if(ceo.state.attributes.UserType === null){
    ceo.actions.setErrorMessage("Fill all required fields")
    // ceo.actions.setAttributes(temp)
  }
  else{
    ceo.actions.setErrorMessage("Form Submitted")
    // ceo.actions.setAttributes(temp)
  }
}
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
}

const handleChange = (evt) =>{
  evt.preventDefault();
  const value = evt.target.value;
  ceo.actions.setAttributes({
    ...ceo.state.attributes,
    [evt.target.name]: value
  });
  console.log("ATTRIBUTES TEMPORARY STATE", ceo.state.attributes)
}

  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
      ml:40
    }}
  >
     <div>
      <TextField required variant="outlined" onChange={handleChange} label="Entity" name="Entity" multiline/>
      <TextField required variant="outlined" onChange={handleChange} label="NTN" name="NTN" multiline/>
      <TextField required variant="outlined" onChange={handleChange} label="Country" name="Country" multiline/>
     </div>
     <div>
      <TextField required variant="outlined" onChange={handleChange} label="City" name="City" multiline/>
      <TextField required variant="outlined" onChange={handleChange} label="Name" name="Name" multiline/>
      <TextField required variant="outlined" onChange={handleChange} label="Contact" name="Contact" multiline/>
     </div>
     <div>
      <TextField required variant="outlined" onChange={handleChange} label="Mail" name="Mail" multiline/>
      <TextField required variant="outlined" onChange={handleChange} label="Password" name="Password" multiline/>
      <TextField required variant="outlined" onChange={handleChange} label="FeeDetail" name="FeeDetail" multiline/>
     </div>
     <div>
      <SearchFilters handleSubmit={handleSubmit}/>
     </div>
     <div>
      <Button onClick={handleSubmit} variant="contained" sx={{ml:38}}>Register</Button>
     </div>
    </Box>
  );
}

export default Home;
