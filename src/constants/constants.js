export const TOKEN_ADDRESS = "0xEDa2C03D107B5832DCE8d405210e534582161387";
export const abi = [
    { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "inputs": [
        {
          "components": [
            { "internalType": "string", "name": "entityName", "type": "string" },
            { "internalType": "string", "name": "ntn", "type": "string" },
            { "internalType": "string", "name": "country", "type": "string" },
            { "internalType": "string", "name": "city", "type": "string" },
            { "internalType": "string", "name": "name", "type": "string" },
            { "internalType": "string", "name": "contact", "type": "string" },
            { "internalType": "string", "name": "email", "type": "string" },
            { "internalType": "string", "name": "password", "type": "string" },
            { "internalType": "string", "name": "feeDetail", "type": "string" },
            {
              "internalType": "enum controlDrugManagement.userType",
              "name": "_userType",
              "type": "uint8"
            },
            { "internalType": "bool", "name": "isExist", "type": "bool" },
            { "internalType": "bool", "name": "isApproved", "type": "bool" }
          ],
          "internalType": "struct controlDrugManagement.user",
          "name": "_userData",
          "type": "tuple"
        }
      ],
      "name": "addUser",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "uint256", "name": "_id", "type": "uint256" }],
      "name": "approveQuota",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "uint256", "name": "_id", "type": "uint256" }],
      "name": "approveTransaction",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "_userId", "type": "address" }
      ],
      "name": "approveUser",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "_userId", "type": "address" }
      ],
      "name": "checkUserStatus",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "deleteUser",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllQuotasRequest",
      "outputs": [
        {
          "components": [
            { "internalType": "uint256", "name": "id", "type": "uint256" },
            { "internalType": "uint256", "name": "quantity", "type": "uint256" },
            {
              "internalType": "uint256",
              "name": "estimatedProduction",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "requestedFrom",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "requestedBy",
              "type": "address"
            },
            { "internalType": "bool", "name": "approvedByAdmin", "type": "bool" }
          ],
          "internalType": "struct controlDrugManagement.quota[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTransactions",
      "outputs": [
        {
          "components": [
            { "internalType": "uint256", "name": "txId", "type": "uint256" },
            {
              "internalType": "address",
              "name": "requestedFrom",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "requestedBy",
              "type": "address"
            },
            { "internalType": "uint256", "name": "quantity", "type": "uint256" },
            {
              "internalType": "uint256",
              "name": "estimatedProduction",
              "type": "uint256"
            },
            { "internalType": "bool", "name": "status", "type": "bool" }
          ],
          "internalType": "struct controlDrugManagement.pendingTransaction[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getUserDetail",
      "outputs": [
        {
          "components": [
            { "internalType": "string", "name": "entityName", "type": "string" },
            { "internalType": "string", "name": "ntn", "type": "string" },
            { "internalType": "string", "name": "country", "type": "string" },
            { "internalType": "string", "name": "city", "type": "string" },
            { "internalType": "string", "name": "name", "type": "string" },
            { "internalType": "string", "name": "contact", "type": "string" },
            { "internalType": "string", "name": "email", "type": "string" },
            { "internalType": "string", "name": "password", "type": "string" },
            { "internalType": "string", "name": "feeDetail", "type": "string" },
            {
              "internalType": "enum controlDrugManagement.userType",
              "name": "_userType",
              "type": "uint8"
            },
            { "internalType": "bool", "name": "isExist", "type": "bool" },
            { "internalType": "bool", "name": "isApproved", "type": "bool" }
          ],
          "internalType": "struct controlDrugManagement.user",
          "name": "_userData",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "uint256", "name": "_quantity", "type": "uint256" },
        {
          "internalType": "uint256",
          "name": "_estimatedProduction",
          "type": "uint256"
        },
        { "internalType": "address", "name": "_requestedFrom", "type": "address" }
      ],
      "name": "requestQuota",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "newOwner", "type": "address" }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
      "name": "users",
      "outputs": [
        { "internalType": "string", "name": "entityName", "type": "string" },
        { "internalType": "string", "name": "ntn", "type": "string" },
        { "internalType": "string", "name": "country", "type": "string" },
        { "internalType": "string", "name": "city", "type": "string" },
        { "internalType": "string", "name": "name", "type": "string" },
        { "internalType": "string", "name": "contact", "type": "string" },
        { "internalType": "string", "name": "email", "type": "string" },
        { "internalType": "string", "name": "password", "type": "string" },
        { "internalType": "string", "name": "feeDetail", "type": "string" },
        {
          "internalType": "enum controlDrugManagement.userType",
          "name": "_userType",
          "type": "uint8"
        },
        { "internalType": "bool", "name": "isExist", "type": "bool" },
        { "internalType": "bool", "name": "isApproved", "type": "bool" }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
  