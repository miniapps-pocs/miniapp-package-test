let jwsjs = null;

function signature() {
    
    if (jwsjs == null) {
        jwsjs = new KJUR.jws.JWSJS();
    }

    const header = newline_toDos(document.jwtForm.jwtHead.value);
    const head = KJUR.jws.JWS.readSafeJSONString(header);
    const payload = newline_toDos(document.jwtForm.jwtPayload.value);
    const prvKey = newline_toDos(document.jwtForm.pemprvkey.value);

    if (jwsjs.isEmpty()) {
        var jws1 = KJUR.jws.JWS.sign(null, header, payload, prvKey);
        jwsjs.initWithJWS(jws1);
    } else {
        jwsjs.addSignature(null, header, prvKey);
    }
    document.jwtForm.jwtJson.value = `${jwsjs.getJSON().headers[0]}.${jwsjs.getJSON().payload}.${jwsjs.getJSON().signatures[0]}`;
    document.jwtForm.jwtResult.value = newline_toDos(JSON.stringify(jwsjs.getJSON(), null, 2));
}

function clear() {
    jwsjs = new KJUR.jws.JWSJS();
    document.jwtForm.jwtJson.value = "";
    document.jwtForm.jwtResult.value = "";
}