import React, { useEffect, useRef, useState } from "react";
import { Grid, Button, Box, Typography, TextField } from "@mui/material";
import Navigation from "../Navigation/Navigation";
import Web3Modal from "web3modal";
import { TOKEN_ADDRESS, abi } from "../../constants/constants"
import Web3 from 'web3';
import { providers, Contract } from "ethers";

function Request() {
   const [userId, setUserId] = useState('')
   const [count, setCount] = useState(0)
   const [walletConnected, setWalletConnected] = useState(false);
   const [supplierAddress, setSupplierAddress] = useState(false);
   const [productId, setProductId] = useState(false);
   const [numberOfUnits, setNumberOfUnits] = useState(false);
   const web3ModalRef = useRef();
 

   useEffect(() => {
    setCount(0)
  }, [])

   useEffect(() => {
 
     if (!walletConnected) {
 
       web3ModalRef.current = new Web3Modal({
         network: "goerli",
         providerOptions: {},
         disableInjectedProvider: false,
       });
       connectWallet();
     }
   }, [walletConnected]);
 
   const connectWallet = async () => {
     try {
 
       await getProviderOrSigner();
       setWalletConnected(true);
 
     } catch (err) {
       console.error(err);
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
 
   const changeNetwork = async () => {
     try {
       await window.ethereum.request({
         method: 'wallet_switchEthereumChain',
         params: [{ chainId: '0x5' }],
       });
     } catch (error) {
       console.log(error);
     }
   };
 
   const register = async () => {
     try {
       const signer = await getProviderOrSigner(true);
       const tokenContract = new Contract(
         TOKEN_ADDRESS,
         abi,
         signer
       );
 
       const tx = await tokenContract.productRequesting(supplierAddress, productId, numberOfUnits);
       await tx.wait();
       alert('Request Created successfully')
       setCount(1)
 
     } catch (err) {
       console.log(err);
       alert(err);
 
     }
   };
 
 
   return (
     <Box
       component="form"
       sx={{
         '& .MuiTextField-root': { m: 1, width: '25ch' },
         ml: 55,
         mt: 8
       }}
     >
       <div>
         <Typography sx={{ ml: 22 }}>Request Page</Typography>
       </div>
       <div>
         <TextField onChange={(e) => setSupplierAddress(e.target.value)} required variant="outlined" label="Supplier Address" name="Supplier Address" />
         <TextField onChange={(e) => setProductId(e.target.value)} required variant="outlined" label="Product Id" name="Product Id" />
       </div>
       <div style={{ marginLeft: 110 }}>
         <TextField onChange={(e) => setNumberOfUnits(e.target.value)} required variant="outlined" label="Number of Units" name="Number of Units" />
       </div>
       <div>
         <Button onClick={register} variant="contained" sx={{ ml: 23 }}>Submit</Button>
       </div>
       <div>
        {count === 1 ?
        <>
          <Typography sx={{mt: 5}}>You requested {numberOfUnits} number of units for supplier with address {supplierAddress} for product id {productId}</Typography> 
          <Typography>The ownership of product id {productId} has been transfered from supplier address to retailer address</Typography> </>: <Typography></Typography>}
      </div>
     </Box>
   );
 }

export default Request;