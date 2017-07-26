import apiRouter from './routes';
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import path from 'path';

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.use('/api', apiRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(3000, () => {
    console.log("listening")
})
