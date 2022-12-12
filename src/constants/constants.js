export const TOKEN_ADDRESS = "0x4Df48189eA65ed857B7885F1E081f4A78f3Ef98F";
export const abi = [
  {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "productID",
              "type": "uint256"
          }
      ],
      "name": "approveRequest",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "checkTransactionStatus",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
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
              "internalType": "struct amazonTransparency.transaction",
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
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "productID",
              "type": "uint256"
          }
      ],
      "name": "performTransaction",
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
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
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
          },
          {
              "internalType": "bool",
              "name": "paymentApprovedByAmazon",
              "type": "bool"
          },
          {
              "internalType": "bool",
              "name": "isExist",
              "type": "bool"
          }
      ],
      "stateMutability": "view",
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
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  }
]