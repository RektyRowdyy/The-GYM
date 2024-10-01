import express from 'express'
import cors from 'cors';
import cookieParser from 'cookie-parser'

const app = express();

//global middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: `${process.env.UI_URL}`,
    credentials: true
}));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.status(200).send({msg: "Welcome to The जीYM"})
});

export { app };