const algosdk = require('algosdk')

const token = "e2960c313568cd4df3f5842c17f5e0624caa5c2d97e341cf1b29163d2eb295d9";
const server = "http://127.0.0.1";
const port = 52001;

let client = new algosdk.Algodv2(token, server, port);

//Creation of keys 
var keys = algosdk.generateAccount();
// console.log(keys)
//Creation of mnemonic
var mnemonic = algosdk.secretKeyToMnemonic(keys.sk);
//console.log(mnemonic)

//Mnemonic to secret key
var secret_key = algosdk.mnemonicToSecretKey(mnemonic);
//console.log(secret_key)


//Check Balance 
const passphrase = mnemonic;

//console.log(passphrase)

let myAccount = algosdk.mnemonicToSecretKey(passphrase)
// console.log("My address: %s", myAccount.addr)

const waitForConfirmation = async function (client) {
let accountInfo = await client.accountInformation(myAccount.addr).do();
console.log("Account balance: %d microAlgos", accountInfo.amount);
}

waitForConfirmation(client)