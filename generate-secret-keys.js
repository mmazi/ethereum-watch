"use strict";

var bitcore = require('bitcore');
var hdUtils = require('./hd-utils');

function writeSeed(keyDesc, key) {
  console.log(keyDesc + ":");
  console.log("    private: " + key.toString());
  console.log("     public: " + key.hdPublicKey.toString());
}

function writeAccount(keyDesc, key) {
  console.log(keyDesc + ":");
  console.log("        key: " + key.privateKey.toString());
  console.log("    address: " + hdUtils.getAddress(key));
}

function derive(m, account, addressIdx) {
  return m.derive("m/44'/60'/" + account + "'/0" + (addressIdx ? '/' + addressIdx : ''));
}

// Hex seed (very secret):
var m = bitcore.HDPrivateKey.fromSeed('e16e395b7b6c8914903a216d09e470440ee685338a6ae784dd4890c7a184ee57');

writeSeed("Master", m);

writeSeed("User deposits", derive(m, 0));

writeAccount("Hot wallet - user deposits forward address", derive(m, 1, 0));
writeAccount("Hot wallet - refills from cold wallet", derive(m, 1, 1));
writeAccount("Cold wallet", derive(m, 2, 0));
