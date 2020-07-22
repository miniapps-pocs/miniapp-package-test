const SECRET = 'ttZs7nn!e$%T';
const TYPE = "Recarga de celular";

function signature() {
    let securityInfo = parseJWT();
    document.cryptojsForm.jwtResult.value = securityInfo;
}

function getBase64Encoded(rawStr) {
    let wordArray = CryptoJS.enc.Utf8.parse(rawStr);
    let base64 = CryptoJS.enc.Base64.stringify(wordArray);
    return base64;
  }

  function getBase64Decoded(encodedStr) {

    let parsedWordArray = CryptoJS.enc.Base64.parse(encodedStr);
    let parsedStr = parsedWordArray.toString(CryptoJS.enc.Utf8);
    return parsedStr;
  }

  function CreateJWT(Header, Payload, Secret) {
    let base64Header = getBase64Encoded(Header);
    var Strlib = new CStrLib();
    let UrlSafe = true;
    let base64Payload = Strlib.toBase64(Payload, UrlSafe);

    let signature = CryptoJS.HmacSHA256(base64Header + "." + base64Payload, Secret);
    let base64Sign = CryptoJS.enc.Base64.stringify(signature);

    let jwt = base64Header + "." + base64Payload + "." + base64Sign;
    return (jwt);
  }

  function parseJWT() {
    let Header = JSON.stringify({ alg: "HS256", typ: "JWT" });
    let Payload = JSON.stringify(document.cryptojsForm.jwtPayload.value || {});
    let jwt = CreateJWT(Header.trim(), Payload.trim(), SECRET);
    return (jwt);
  }
