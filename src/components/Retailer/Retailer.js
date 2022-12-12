import React, { useEffect, useRef, useState } from "react";
import { Grid, Button, Box, Typography, TextField } from "@mui/material";
import Navigation from "../Navigation/Navigation";
import Web3Modal from "web3modal";
import { TOKEN_ADDRESS, abi } from "../../constants/constants"
import Web3 from 'web3';
import { providers, Contract } from "ethers";


function Retailer() {

  const [walletConnected, setWalletConnected] = useState(false);
  const [count, setCount] = useState(0);
  const [supplierAddress, setSupplierAddress] = useState(false);
  const [storeName, setStoreName] = useState(false);
  const [supplierName, setSupplierName] = useState(false);
  const web3ModalRef = useRef();

  // useEffect(() => {

  // }, [count])

  // function show(){
  //   return `The supplier with address ${supplierName} has been registered`;
  // }

  useEffect(() => {
    setCount(0)
  },[])
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

      // const address = signer.toString();
      console.log("aaa");
      const tx = await tokenContract.registeration(storeName, supplierName, supplierAddress);
      await tx.wait();
      setCount(1)
      alert("Registration Successful");

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
        ml: 42,
        mt: 8
      }}
    >
      <div>
        <Typography sx={{ ml: 31.5, mb: 5 }}>Seller Registration Page</Typography>
      </div>
      <div>
        <Typography sx={{ ml: 33, mb: 3 }}>Fill out your details</Typography>
      </div>
      <div>
        <TextField onChange={(e) => setSupplierAddress(e.target.value)} required variant="outlined" label="Supplier Address" name="Supplier Address" />
        <TextField onChange={(e) => setStoreName(e.target.value)} required variant="outlined" label="Your Store Name" name="Your Store Name" />
        <TextField onChange={(e) => setSupplierName(e.target.value)} required variant="outlined" label="Supplier Name" name="Supplier Name" />
      </div>
      <div>
        <Button onClick={register} variant="contained" sx={{ ml: 36, mt: 2 }}>Register</Button>
      </div>
      <div>
        {console.log("DEBUG", supplierAddress, supplierName)}
        {count === 1 ?
          <Typography sx={{mt: 5 }}>The supplier {supplierName} with address {supplierAddress} has been registered</Typography> : <Typography></Typography>}
      </div>
    </Box>
  );
}

export default Retailer;