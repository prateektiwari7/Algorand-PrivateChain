const algosdk = require('algosdk')

//Encode/decode addresses
var decoded = algosdk.decodeAddress("Q5JDAS3DA4OSETTQVGDW6YXHKDSQIUA5VGU2MYSBPG4TY26MILKJCLRYSY");
var encoded = algosdk.encodeAddress(decoded.publicKey);
console.log('Decoded:', decoded);
console.log('Encoded:', encoded);