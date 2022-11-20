import express from 'express';
import UrlShortener from './controllers/UrlShortener';

const routes = express.Router();

const urlShortenerController = new UrlShortener();

routes.get('/:shortUrl', urlShortenerController.redirect);
routes.get('/status/:shortUrl', urlShortenerController.status);
routes.get('/list', urlShortenerController.list);
routes.post('/create', urlShortenerController.create);

export default routes;