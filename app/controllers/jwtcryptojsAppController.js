module.exports.index = function(req, res) {
    res.render('jwtcryptojsapp/index', {
        provider: "Operadora",
        TYPE: "Recarga de celular"
    });
};