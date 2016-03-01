## Observe Ethereum blockchain

    npm install
    geth --rpc
    node watch.js

### Documentation

[web3.eth.filter](https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethfilter)

## Watched addresses and their keys

Make use of key/address hiearchy standardized by [BIP 32](bip-32)/[44](bip-44).

tl;dr: BIPs 32 & 44 define a hierarchy of private/public key pairs. The key pairs are derived
in a deterministic way in a hierarchical (tree-like) structure. The master seed sits at the root
of the tree.

The structure of the Oxygen key tree reflects the structure of the bridge services as described
[here](https://docs.google.com/document/d/1_oGH_Zh8u7MzQFvyPOZXHtt6B4vpQq5PURjAXUduWpI/edit).

`generate-secret-keys.js` -- generate all the keys and seeds needed for the ETH Gateway from a master seed.

`addrgen.js` -- proof of concept code to generate user deposit addresses.

`keygen.js` -- proof of concept code to generate the secret keys that correspond to user deposit addresses.


References:

[bip-32]: https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki
[bip-44]: https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki
