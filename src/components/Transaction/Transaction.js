import React, { useEffect, useRef, useState } from "react";
import { Grid, Button, Box, Typography, TextField, Paper } from "@mui/material";
import Navigation from "../Navigation/Navigation";
import { TOKEN_ADDRESS, abi } from "../../constants/constants"
import Web3Modal from "web3modal";
import Web3 from 'web3';
import { providers, Contract } from "ethers";


function Transaction() {

  const [walletConnected, setWalletConnected] = useState(false);
  const [count, setCount] = useState(0);
  const [res, setRes] = useState([]);
  const[txid, setTxid] = useState(false);
  const[pid, setPid] = useState(false);
  const web3ModalRef = useRef();

  useEffect(() => {
    setRes([])
    setCount(0)
  }, [])

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
      const tx = await tokenContract.performTransaction(pid, { value: txid });
      setCount(1)
      alert("Transaction Successful");
      // await tx.wait();
    //   alert(tx)
      console.log(tx)
      setRes(tx)
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

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        ml: 54,
        mt: 8
      }}
    >
      <div>
        <Typography sx={{ ml: 22, mb: 5 }}>Transactions Page</Typography>
      </div>
      <div>
        <TextField onChange={(e) => setTxid(e.target.value)} required variant="outlined" label="Enter Amount" name="Enter Amount" />
        <TextField onChange={(e) => setPid(e.target.value)} required variant="outlined" label="Product Id" name="Enter Product Id" />
      </div>
      <div>
        <Button onClick={getTransaction} variant="contained" sx={{ ml: 25, mt: 2 }}>Submit</Button>
        <div>
        {count === 1 ?
          <Typography sx={{mt: 5 }}>The transaction with product id {pid} has been made with amount {txid}wei</Typography> : <Typography></Typography>}
      </div>
      </div>
      {
        res.length > 0 &&
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          mt: 3,
          ml: -17,
          p:5
        }
      }}
    >
      <Paper elevation={3} sx={{alignItems: 'center'}}>
        <Typography>
          {console.log('DEBUG IN RETURN',res.approved)}
        Approved: {String(res.approved)}
        </Typography>
        <Typography>
        Product Id: {String(res.from)}
        </Typography>
        </Paper>
    </Box>
    }
    </Box>
  );
}

export default Transaction;