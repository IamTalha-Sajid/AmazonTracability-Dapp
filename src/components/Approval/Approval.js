import React, { useEffect, useRef, useState } from "react";
import { Grid, Button, Box, Typography, TextField } from "@mui/material";
import Navigation from "../Navigation/Navigation";
import { TOKEN_ADDRESS, abi } from "../../constants/constants"
import Web3Modal from "web3modal";
import Web3 from 'web3';
import { providers, Contract } from "ethers";

function Approval() {

  const [walletConnected, setWalletConnected] = useState(false);
  const [id, setId] = useState('')
  const[pid, setPid] = useState(false);
  const [count, setCount] = useState(0)
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

  const register = async () => {
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
      const tx = await tokenContract.approveRequest(pid);
      await tx.wait();
      setCount(1)
      alert('Transaction Approved')
      // await tx.wait();
    //   alert(tx)
      console.log(tx)
    } catch (err) {
      alert(err);
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
        <Typography sx={{ ml: 7.5, mb:3 }}>Approval page</Typography>
      </div>
      <div>
        <TextField onChange={(e) => setPid(e.target.value)} required variant="outlined" label="Product Id" name="Enter Product Id" />
      </div>
      <div>
        <Button onClick={register} variant="contained" sx={{ ml: 5, mt: 3 }}>Approve Request</Button>
      </div>
      <div>
        {count === 1 ?
          <Typography sx={{mt: 5, mr:5 }}>Your request has been approved by amazon</Typography> : <Typography></Typography>}
      </div>
      {/* <div>
        {console.log("DEBUG", count, id)}
        <Typography sx={{ ml: -9, mt: 3 }}>{id}</Typography>
      </div> */}
    </Box>
  );
}

export default Approval;