module.exports = function (application) {
    application.get('/jwtcryptojsapp', (req, res) => {
        application.app.controllers.jwtcryptojsAppController.index(req, res);
    });
};
