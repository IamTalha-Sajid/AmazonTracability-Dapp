import React, { useEffect, useRef, useState } from "react";
import { Grid, Button, Box, Typography, TextField } from "@mui/material";
import Navigation from "../Navigation/Navigation";
import Web3Modal from "web3modal";
import Web3 from 'web3';
import { providers, Contract } from "ethers";

function Approval() {

  const [walletConnected, setWalletConnected] = useState(false);
  const [id, setId] = useState('')
  const [count, setCount] = useState(0)
  const web3ModalRef = useRef();

  useEffect(() => {
    setCount(0)
    setId('')
  }, []);

  useEffect(() => {
    setCount(1)
  }, [id]);

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

      const tx = await tokenContract.approveRequest({ value: 100 });
      await tx.wait();
      console.log(tx.hash)
      const show = "Your Transaction ID is: " + tx.hash
      setId(show)
      // await console.log(tx)

    } catch (err) {
      console.log(err);
      // alert(err);

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
        <Typography sx={{ ml: 23.5 }}>Approval page</Typography>
      </div>
      <div>
        <Button onClick={register} variant="contained" sx={{ ml: 20, mt: 3 }}>Approve Request</Button>
      </div>
      <div>
        {console.log("DEBUG", count, id)}
        <Typography sx={{ ml: -9, mt: 3 }}>{id}</Typography>
      </div>
    </Box>
  );
}

const TOKEN_ADDRESS = "0x2cb73863A20760BB9566a3262A2d74737054eF01";
const abi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "approveRequest",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "txId",
        "type": "uint256"
      }
    ],
    "name": "getTransactionDetails",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "txId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "productId",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "internalType": "struct amazonTransparancy.transaction",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "productId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_customerAddress",
        "type": "address"
      }
    ],
    "name": "markAsDelivered",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "supplierAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "productID",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "retailerRequiredUnits",
        "type": "uint256"
      }
    ],
    "name": "productRequesting",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "productRequests",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "requestId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "retailerAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "supplierAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "productID",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "retailerRequiredUnits",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "paymentTransaction",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "products",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "productID",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isDeliveredToCustomer",
        "type": "bool"
      },
      {
        "internalType": "address",
        "name": "productOwner",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "_address",
        "type": "address"
      }
    ],
    "name": "registerCourier",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "retailerStoreName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "supplierName",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "supplierAddress",
        "type": "address"
      }
    ],
    "name": "registeration",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

export default Approval;