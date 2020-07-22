module.exports = function (application) {
    
    application.get('/jwtApp', (req, res) => { 
        application.app.controllers.jwtAppController.index(req, res);
    });

    application.get('/jwtApp/decrypt', (req, res) => {
        application.app.controllers.jwtAppController.decrypt(req, res);
    });

};