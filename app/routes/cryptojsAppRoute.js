module.exports = function (application) {
    application.get('/cryptojsApp', (req, res) => {
        application.app.controllers.cryptojsAppController.index(req, res);
    });
};
