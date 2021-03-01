const algosdk = require('algosdk')
const token = "e7bfc34dd5fbf4455d1106b8c4d3b9711ee2818d2e7e440706612e9417f32976";
const server = "http://127.0.0.1";
const port = 50722;
const client = new algosdk.Algod(token, server, port);

(async () => {
    console.log(await client.status());
})().catch(e => {
    console.log(e);
});