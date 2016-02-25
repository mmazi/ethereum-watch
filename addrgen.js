var bitcore = require('bitcore');
var hdUtils = require('./hd-utils.js');
var getDerivedAddress = hdUtils.getDerivedAddress;

// The seed used to compute users' deposit addresses
var userDepositsExtPub = "xpub6EWpjgQzZsqV9Vf1FfWRqGF8ncAHrEYdkP5cW6xNNm7D3tFSySnKbp8bHEexeBgm8QRaF9cNAzxF7LN16oroYCJjSURwoavy8Jzfgdr7uEr";
console.log(userDepositsExtPub);

// Create the hd wallet (deposit address collection)
var userDepositsExtPubKey = new bitcore.HDPublicKey(userDepositsExtPub);

// Output some user addresses. The users can use these for deposits.
console.log(getDerivedAddress(userDepositsExtPubKey, 100000000));
console.log(getDerivedAddress(userDepositsExtPubKey, 123456789));
console.log(getDerivedAddress(userDepositsExtPubKey, 999999999));
