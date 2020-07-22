module.exports.index = function(req, res) {
    res.render('jwtApp/index', {
        name: 'Tiago'
    });
};