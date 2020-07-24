module.exports.index = function(req, res) {
    res.render('jwtApp/encrypt', {
        alg: "HS256",
        privateKey: '[key]',
        publicKey: '[key]'
    });
};
module.exports.decrypt = function(req, res) {
    res.render('jwtApp/decrypt', {
        privateKey: '[key]',
        publicKey: '[key]'
    });
}