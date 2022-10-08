export const TOKEN_ADDRESS = "0x2cb73863A20760BB9566a3262A2d74737054eF01";
export const abi = [
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