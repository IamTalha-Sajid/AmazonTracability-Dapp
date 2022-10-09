import React, { useEffect, useRef, useState } from "react";
import { Grid, Button, Box, Typography, TextField } from "@mui/material";
import Navigation from "../Navigation/Navigation";
import { TOKEN_ADDRESS, abi } from "../../constants/constants"
import Web3Modal from "web3modal";
import Web3 from 'web3';
import { providers, Contract } from "ethers";


function Transaction() {

  const [walletConnected, setWalletConnected] = useState(false);
  const[txid, setTxid] = useState(false);
  const web3ModalRef = useRef();

  const connectWallet = async () => {
    try {
      // Get the provider from web3Modal, which in our case is MetaMask
      // When used for the first time, it prompts the user to connect their wallet
      await getProviderOrSigner(false);
      // setWalletConnected(true);

    } catch (error) {
      console.log(error);
    }
  };

  const getTransaction = async (attributes) => {
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
      const tx = await tokenContract.getTransactionDetails(txid);
    //   await tx.wait();
    //   alert(tx)
    //   console.log(tx)
    } catch (err) {
      console.log(err);
    }
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

  useEffect(() => {
    // if wallet is not connected, create a new instance of Web3Modal and connect the MetaMask wallet
    if (!walletConnected) {
      // Assign the Web3Modal class to the reference object by setting it's `current` value
      // The `current` value is persisted throughout as long as this page is open
      web3ModalRef.current = new Web3Modal({
        network: "goerli",
        providerOptions: {},
        disableInjectedProvider: false,
      });
      connectWallet();
    }
  }, [walletConnected]);

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        ml: 70,
        mt: 8
      }}
    >
      <div>
        <Typography sx={{ ml: 6, mb: 5 }}>Transactions Page</Typography>
      </div>
      <div>
        <TextField onChange={(e) => setTxid(e.target.value)} required variant="outlined" label="Transaction Id" name="Transaction Id" />
      </div>
      <div>
        <Button onClick={getTransaction} variant="contained" sx={{ ml: 9, mt: 2 }}>Submit</Button>
      </div>
    </Box>
  );
}

export default Transaction;