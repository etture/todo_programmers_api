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

// Router endpoint
import ApiRouter from './routes/index';
app.use('/api', ApiRouter);

// Server connectivity test page
app.get("/", (req, res) => {
    res.send(
        "<h1>TODO 과제 API입니다.</h1>"
	);
});

// Server connection
app.listen(PORT, () => {
	console.log(`server started on ${PORT}`);
});
