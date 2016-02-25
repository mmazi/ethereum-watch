var ec = require('elliptic').ec('secp256k1');
var ethereumjsUtil = require('ethereumjs-util');

/*
 * Some of this code is copied from the ethereum-bip44 library, credit goes to them
 */

exports.getAddress = function(key) {
  var ethPubKey = bip32PublicToEthereumPublic(key.publicKey.toBuffer());
  var address = ethereumjsUtil.pubToAddress(ethPubKey);
  return `0x${address.toString('hex')}`;
};

exports.getDerivedAddress = function(parent, childIndex) {
  return exports.getAddress(parent.derive(childIndex));
};

function bip32PublicToEthereumPublic(pubKey) {
  var key = ec.keyFromPublic(pubKey).getPublic().toJSON();
  return new Buffer(key[0].toArray().concat(key[1].toArray()));
}