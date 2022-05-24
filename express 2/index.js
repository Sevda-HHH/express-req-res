import express from 'express';
import dotenv from 'dotenv';
import { getRequestTimeMiddleware } from './middlewares.js';

const app = express();

const data = [
    {
        "id": 1,
        "name": "Senem",
        "age": 21
    },
    {
        "id": 2,
        "name": "Leyla",
        "age": 21
    },
    {
        "id": 3,
        "name": "Cahandar",
        "age": 21
    }

]

dotenv.config();
const port = process.env.PORT;

app.use(getRequestTimeMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.get('/', (req, res) => { 
//     const newdara = data.find(item => item.name == req.query.name);
//     res.json(newdara);
// })

app.get('/', (req, res) => {
    res.json(data);
})

app.get('/cookies', (req, res) => {
    console.log(req.headers.host);
    res.send(req.headers.host);
})

app.get('/songs/:name', (req, res) => {
    const findData = data.find(item => item.name == req.params.name)
    if (findData) {

        res.status(200).json(findData)
    } else {
        res.status(404).send("This data was not found ")
    }
})

// app.post('/', (req, res) => {
//     console.log(req.body)
//     res.json(req.body);
// })


app.listen(port ?? 8000, () => {
    console.log(`App is active ${port}`)
});



