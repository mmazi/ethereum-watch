var bitcore = require('bitcore');
var hdUtils = require('./hd-utils.js');
var getAddress = hdUtils.getAddress;

// The seed used to compute users' deposit addresses
// It can be computed from the master key like this:
//var m = new bitcore.HDPrivateKey('xprv9s21ZrQH143K2f2DCtydaTP9iE1uZF4bFK7L8m6Lrceqi8Ejo1kBrBNUaQYgtHR9QD36CESdDyRSkMrmtriET94kR3auY64K8S4Kigcnzsz');
//var userDepositsExtPub = m.derive("m/44'/60'/0'/0").hdPublicKey.toString();
var userDepositsExtPub = "xpub6EvFptMry73BWp8ion7PWBVUdDLvNjdQrEKriAZXTDMtWXxwC7vYtNvjv4Hvrr8ESTdH3wUnCxpDjzUksQ8Ng14EHeBCWoADe7p9Vyrv2ge";
console.log(userDepositsExtPub);

// Create the hd wallet (deposit address collection)
var userDepositsExtPubKey = new bitcore.HDPublicKey(userDepositsExtPub);

// Output some user addresses. The users can use these for deposits.
console.log(getAddress(userDepositsExtPubKey, 100000000));
console.log(getAddress(userDepositsExtPubKey, 123456789));
console.log(getAddress(userDepositsExtPubKey, 999999999));
