var bitcore = require('bitcore');
var hdUtils = require('./hd-utils.js');
var getAddress = hdUtils.getAddress;

// The seed used to compute users' deposit addresses (todo: get from a safe storage)
// It can be computed from the master key like this:
//var m = new bitcore.HDPrivateKey('xprv9s21ZrQH143K2f2DCtydaTP9iE1uZF4bFK7L8m6Lrceqi8Ejo1kBrBNUaQYgtHR9QD36CESdDyRSkMrmtriET94kR3auY64K8S4Kigcnzsz');
//var userDepositsExtKey = m.derive("m/44'/60'/0'/0");
var userDepositsExtKey = new bitcore.HDPrivateKey("xprvA1vuRNpy8jUtJL4FhkaP93Yk5BWRyGuZV1QFun9utspudjdneacJLacG4nZCJorAM4S8rHMnrr3gswiHELgNRTt5CG5N9uwuvq28JokUu1C");
console.log("userDepositsExtKey = " + userDepositsExtKey.hdPublicKey.toString());

// Get some user private keys. These can be imported into geth like this:
// > geth account import <keyfile>
console.log(userDepositsExtKey.derive(100000000).privateKey.toString());
console.log(userDepositsExtKey.derive(123456789).privateKey.toString());
console.log(userDepositsExtKey.derive(999999999).privateKey.toString());

// Output the corresponding addresses. Note that these are the same as the ones publicly derived in addrge.js.
console.log(getAddress(userDepositsExtKey, 100000000));
console.log(getAddress(userDepositsExtKey, 123456789));
console.log(getAddress(userDepositsExtKey, 999999999));
