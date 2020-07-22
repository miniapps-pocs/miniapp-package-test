module.exports.index = function(req, res) {
    res.render('cryptojsApp/index', {
        provider: "Operadora",
        TYPE: "Recarga de celular"
    });
};