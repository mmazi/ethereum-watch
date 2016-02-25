var bitcore = require('bitcore');
var hdUtils = require('./hd-utils.js');
var getAddress = hdUtils.getDerivedAddress;

// The seed used to compute users' deposit keys (todo: get from a safe storage)
var userDepositsExtKey = new bitcore.HDPrivateKey("xprvA1XULAt6jWHBw1aY9dyRU8JQEaKoSmpnPAA1hiYkpRaEB5vJRuU541p7Ryeq3ia76Lzd8PogsLHqNwDfBYGAE9FUer96upJBAXaZ5Bwz8Wp");
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
