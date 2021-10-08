require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict argue system venture struggle return stereo puppy grace hat army gaze'; 
let testAccounts = [
"0x8110f376ce6c78c81c0ce62054bb7ae34adbee06e58559c18909e925adad0548",
"0xb77b0aa6605402570d51a041d450cabcb68391d7fcb532efc8218602b18050a6",
"0x9d577ca49eba36f8901352165f86c6f0c0df8fc93e83396d28953412fe3e703c",
"0x4ac4bcff8a2eb7b7075be40efe699108762846b56c730d7527a9b56fee42afba",
"0x508ed209b2a1bebfe198f6173adf3f93255b14a1c8a1d71886685882b78a9af6",
"0x8a8dd1ef47d2e50475d53775d020b10acb2f1aa26738a38c2cf56b4331aa237a",
"0x4c7cbd5de9f538b0c7be77d2ff5ca125e452b52050b9d87cd9c6f4922108e3a2",
"0xeff3d5747ec5319235978190a8c5a099ce882967fc838acebad0819ee76ca2fd",
"0xe0bb0477040f9c49f4232584639d657afe5ec7878729f895e601346a784f0849",
"0x58e3fa4c8aadbba2ca1e697c44edf297a65bf3c641a38ea92530f63f4d37e389"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


