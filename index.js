let crypto;
try {
  crypto = require("crypto");
} catch (err) {
  console.log('crypto support is disabled!');
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