"use strict";

var bitcore = require('bitcore');
var hdUtils = require('./hd-utils');

function writeSeed(keyDesc, key) {
  console.log(keyDesc + ":");
  console.log("    private: " + key.toString());
  console.log("     public: " + key.hdPublicKey.toString());
}

function writeSeedDerived(keyDesc, m, account) {
  writeSeed(keyDesc, deriveAccountExt(m, account));
}

function writeAccountAddress(keyDesc, m, account, addressIdx) {
  var key = deriveAccountExtSub(m, account, addressIdx);
  console.log(keyDesc + ":");
  console.log("        key: " + key.privateKey.toString());
  console.log("    address: " + hdUtils.getAddress(key));
}

function deriveAccountExt(master, account) {
  var path = "m/44'/60'/" + account + "'/0";
  console.log("Path: " + path);
  return master.derive(path);
}

function deriveAccountExtSub(master, account, addressIdx) {
  var path = "m/44'/60'/" + account + "'/0/" + addressIdx;
  console.log("Path: " + path);
  return master.derive(path);
}

// Hex seed (very secret):
var m = bitcore.HDPrivateKey.fromSeed('e16e395b7b6c8914903a216d09e470440ee685338a6ae784dd4890c7a184ee57');

writeSeed("Master", m);

writeSeedDerived("User deposits", m, 0);

writeAccountAddress("Hot wallet", m, 1, 0);
writeAccountAddress("Cold wallet", m, 2, 0);
