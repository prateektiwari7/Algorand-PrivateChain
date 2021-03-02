const algosdk = require('algosdk')

//Check the validity of an Address
var isValid = algosdk.isValidAddress("Q5JDAS3DA4OSETTQVGDW6YXHKDSQIUA5VGU2MYSBPG4TY26MILKJCLRYSY");
console.log(isValid)