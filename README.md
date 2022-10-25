# OAuth - Authorization using PKCE 

This is a sample Node.js app that will help you authenticate using OAuth with PKCE in ArcGIS.

This script generates the `code_verifier` (supported in [oauth/token](https://developers.arcgis.com/rest/users-groups-and-items/token.htm)) and `code_challenge` (supported in [oauth/authorize](https://developers.arcgis.com/rest/users-groups-and-items/authorize.htm)) using S256 needed in the authorization Code Flow with PKCE.

> **Note**: 
You can find more code samples at "[Call Your API Using the Authorization Code Flow with PKCE](https://auth0.com/docs/get-started/authentication-and-authorization-flow/call-your-api-using-the-authorization-code-flow-with-pkce#steps)".


## Script

```js
let crypto;
try {
  crypto = require("crypto");
} catch (err) {
  console.log('Run $npm install first!');
}

function base64URLEncode(str) {
  return str.toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=/g, '');
}
const verifier = base64URLEncode(crypto.randomBytes(32));
console.log("Code verifier: ", verifier);

function sha256(buffer) {
  return crypto.createHash('sha256').update(buffer).digest();
}
const challenge = base64URLEncode(sha256(verifier));
console.log("Code challenge: ", challenge);
```

## Install and run

Install by running `npm install` and then run it:

```bash
$ node index.js
Code verifier:  CMBya5LFXGJktdlm5OL8bIIpVa4LtUAl4ihYCFalQNc
Code challenge:  qaXuju2sX8lKLvErIKHfdrg0h7DLvSeLuErfsfMJFj4
```