const algosdk = require('algosdk')



//Create transaction 
var txn = { 
    "to": "7ZUECA7HFLZTXENRV24SHLU4AVPUTMTTDUFUBNBD64C73F3UHRTHAIOF6Q",
    "fee": 10,
    "amount": 847,
    "firstRound": 51,
    "lastRound": 61,
    "genesisID": "devnet-v33.0",
    "genesisHash": "JgsgCaCTqIaLeVhyL6XlRu3n7Rfk2FxMeK+wRSaQ7dI=",
    "closeRemainderTo": "IDUTJEUIEVSMXTU4LGTJWZ2UE2E6TIODUKU6UW3FU3UKIQQ77RLUBBBFLA",
    "note": new Uint8Array(Buffer.from("6gAVR0Nsv5Y=", "base64"))
};

var signedTxn = algosdk.signTransaction(txn, keys.sk);
console.log(signedTxn)