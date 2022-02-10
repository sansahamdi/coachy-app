require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

/******Middleware */
app.use(express.json());
app.use(cors({ origin: '*' }));

/******Import Routes */
const album = require('./routes/albumRoute');

const article = require('./routes/articleRoute');

const boutique = require('./routes/boutiqueRoute');

const circuit = require('./routes/circuitRoute');

const commande = require('./routes/commandeRoute');

const guide = require('./routes/guideRoute');

const imageMonument = require('./routes/imageMonumentRoute');

const monument = require('./routes/monumentRoute');

const partenaire = require('./routes/partenaireRoute');

const personnalise = require('./routes/personnaliseRoute');

const photo = require('./routes/photoRoute');

const publication = require('./routes/publicationRoute');

const thematique = require('./routes/thematiqueRoute');

const user = require('./routes/userRoute');

const reservation = require('./routes/reservationRoute');

const userGuide = require('./routes/utilisateurGuideRoute');

const monumentGuide = require('./routes/monumentGuideRoute');

const monumentPersonnalise = require('./routes/monumentPersonnaliseRoute');

/******Routes */
app.use('/api/v1', album);

app.use('/api/v1', article);

app.use('/api/v1', boutique);

app.use('/api/v1', circuit);

app.use('/api/v1', commande);

app.use('/api/v1', guide);

app.use('/api/v1', imageMonument);

app.use('/api/v1', monument);

app.use('/api/v1', partenaire);

app.use('/api/v1', personnalise);

app.use('/api/v1', photo);

app.use('/api/v1', publication);

app.use('/api/v1', thematique);

app.use('/api/v1', user);

app.use('/api/v1', reservation);

app.use('/api/v1', userGuide);

app.use('/api/v1', monumentGuide);

app.use('/api/v1', monumentPersonnalise);

/********************* */

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server is running on port : ${port}`);
});
