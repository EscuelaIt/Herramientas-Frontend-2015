import express from 'express';

import Scrapper from 'it-charly-scrapper';

/**
 * LOGO PNG
* */
import {readFileSync} from 'fs';
import {attachTo} from 'console-png';
attachTo(console);

const app = express();

const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT     = process.env.PORT || 3000;

app.get('/', (req, resp) => {
  resp.send(
    `
    <html>
      <body>
        <h3>Url en formato /detail/:title/:subtitle</h3>
        <h3>Url en formato /:section/:page</h3>
      </body>
    </html>
    `
  );
})

app.get('/detail/:title/:subtitle', (req, resp) => {
  Scrapper.detail({title: req.params.title, subtitle: req.params.subtitle}).then(
    details => resp.json(details)
  );
});



app.get('/:section/:page', (req, resp) => {
  Scrapper.page({section: req.params.section, page: req.params.page}).then(
    links => resp.json(links)
  );
});

app.listen(PORT, () => {
  console.png(readFileSync(__dirname + '/../escuelait.png'))
  console.info("==> ✅  Server is listening");
	console.info("==> 🌎  Go to http://%s:%s", HOSTNAME, PORT);
});
