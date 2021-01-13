
import "reflect-metadata";
import express from "express";
import compression from "compression";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import router from './router/router';
import path from 'path';

(async () => {
  const app = express();

  app.set('views', path.join(__dirname,'./views'));
  app.set('view engine', 'ejs');

  app.use(express.static(path.join(__dirname, './public')));
  
  app.use(compression());
  app.use(cookieParser())
  app.use(bodyParser.json());
  app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/',router)


  const options = {
    host: "0.0.0.0",
    port: 4000
  }
  app.listen(options, () => {
    console.log("server on 🚀");
  });
})();