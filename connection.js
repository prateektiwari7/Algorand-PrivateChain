const algosdk = require('algosdk')
const token = "e2960c313568cd4df3f5842c17f5e0624caa5c2d97e341cf1b29163d2eb295d9";
const server = "http://127.0.0.1";
const port = 52001;
const client = new algosdk.Algod(token, server, port);

(async () => {
    console.log(await client.status());
})().catch(e => {
    console.log(e);
});

