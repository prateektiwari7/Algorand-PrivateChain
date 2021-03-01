const algosdk = require('algosdk')

//Creation of keys 
var keys = algosdk.generateAccount();
console.log(keys)