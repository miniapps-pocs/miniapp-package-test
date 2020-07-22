import express from 'express';
import bodyParser from 'body-parser';
import consign from 'consign';
import compression from 'compression';
import path from 'path';

export default class Server {

    prepareApp() {

        const app = express();

        app.set('view engine', 'ejs');
        const viewsPath = path.join(__dirname, '..', 'app', 'views');
        app.set('views', viewsPath);

        app.use(express.static('./app/public'));

        app.use(compression());
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json());
        
        consign()
            .include('app/routes')
            .then('app/controllers')
            .into(app);

        return app;
    }
}

global.responseLog = (req, res) => {
    console.log(`${req.method} ${req.originalUrl} ${res.statusCode}`);
};
