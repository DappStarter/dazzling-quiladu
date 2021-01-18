require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remind concert harvest glide flip tunnel'; 
let testAccounts = [
"0x9af2a8b632111d902e63d6112962eafd67447a55f7d19fe31ad887f217749832",
"0xc135a4deae2e3c7f86dbc7d1b6d99d1e9cf48f42a66128b966069808ea76f6cf",
"0x1162c4e6572819ea63ec1af7d1061d65749426111c54501281842ecba2aef456",
"0x81798d31868dde21d74d62661a1ba1f8f543c96c681808485b3970f6defc5a09",
"0x297dc27aff22db88c2cf4b096fd3f0e81eaba3a111a83fc3458ddca8a0d146e1",
"0x0d6303acd5fd99384f82d74adab60869233dc5aa73d5a334e93464f3d2e04909",
"0xf055a0e193dae14ed3eb710e4fd591fe0264354b4d489d58dfe8fa4c42faf928",
"0x72b36fa3597db4002d2c3a5647d3a094beafd688af50472a0de7bc03acb4a433",
"0x6c5c5847aa76bde468d2141659312a8618ef0b5437e36c22c59d933695239dc7",
"0x59f863a487a39f6ebea9f9454df194bf6e8cf955c685bbde2e5b933e5d55e021"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
