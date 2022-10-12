import React, { useRef, useState } from "react";
import { Grid, Button, Box, Typography, TextField } from "@mui/material";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link
} from "react-router-dom";
import Web3Modal from "web3modal";
import Web3 from 'web3';
import { providers, Contract } from "ethers";

function Navigation(props) {
   
  const [walletConnected, setWalletConnected] = useState(false);
  const web3ModalRef = useRef();

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

  const connectWallet = async () => {
    try {
      web3ModalRef.current = new Web3Modal({
        network: "goerli",
        providerOptions: {},
        disableInjectedProvider: false,
      })
      // Get the provider from web3Modal, which in our case is MetaMask
      // When used for the first time, it prompts the user to connect their wallet
      await getProviderOrSigner();
      setWalletConnected(true);

    } catch (err) {
      console.error(err);
    }
  };



  return (
    <Box
      sx={{
        display: "flex", gap: 5, ml: 60, mt: 2
      }}
    >
      <Link to="/retailer">Retailer</Link>
      <Link to="/request">Request</Link>
      <Link to="/home">Home</Link>
      <Link to="/approval">Approval</Link>
      <Link to="/transaction">Transaction</Link>
      <Button variant="contained" sx={{ ml: 23 }} disabled={walletConnected ? true : false} onClick={connectWallet}>Connect Wallet</Button>
    </Box>
  );

  
}

export default Navigation;