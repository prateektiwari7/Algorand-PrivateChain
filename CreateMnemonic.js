const algosdk = require('algosdk')

//Creation of keys 
var keys = algosdk.generateAccount();
console.log(keys)
//Creation of mnemonic
var mnemonic = algosdk.secretKeyToMnemonic(keys.sk);
//console.log(mnemonic)

//Mnemonic to secret key
var secret_key = algosdk.mnemonicToSecretKey(mnemonic);
console.log(secret_key)