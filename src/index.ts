import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
const dotenvConfig = dotenv.config();

// Port
const PORT = process.env.PORT || 3080

// Middleware setup
app.use(morgan("dev"));
app.use(bodyParser.json({type: "*/*"}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("public"));
app.use(cors());

import routerApi from './routes/index';

// Router endpoint
// app.use('/api', routerApi);
app.use('/api', routerApi);

// Server connectivity test page
app.get("/", (req, res) => {
    res.send(
        "<h1>TODO 과제 API입니다.</h1>"
	);
});


app.listen(PORT, () => {
	console.log(`server started on ${PORT}`);
});
