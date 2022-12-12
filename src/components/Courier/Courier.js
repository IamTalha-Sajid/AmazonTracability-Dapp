import React, { useEffect, useRef, useState } from "react";
import { Grid, Button, Box, Typography, TextField } from "@mui/material";
import Navigation from "../Navigation/Navigation";
import { TOKEN_ADDRESS, abi } from "../../constants/constants"
import Web3Modal from "web3modal";
import Web3 from 'web3';
import { providers, Contract } from "ethers";


function Courier() {

  const [walletConnected, setWalletConnected] = useState(false);
  const [CourierAddress, setCourierAddress] = useState(false);
  const [courierName, setCourierName] = useState(false);
  const web3ModalRef = useRef();

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

      const tx = await tokenContract.registerCourier(courierName, CourierAddress);
      await tx.wait();

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
        ml: 58,
        mt: 8
      }}
    >
      <div>
        <Typography sx={{ ml: 23, mb: 5 }}>Courier Page</Typography>
      </div>
      <div>
        <Typography sx={{ ml: 16, mb: 3 }}>Register your courier company</Typography>
      </div>
      <div>
        <TextField onChange={(e) => setCourierAddress(e.target.value)} required variant="outlined" label="Courier Address" name="Courier Address" />
        <TextField onChange={(e) => setCourierName(e.target.value)} required variant="outlined" label="Courier Name" name="Courier Name" />
      </div>
      <div>
        <Button onClick={register} variant="contained" sx={{ ml: 23, mt: 2 }}>Register</Button>
      </div>
    </Box>
  );
}

export default Courier;