import express from "express"
import cors from 'cors'

import db from "./database/db.js"
import router from "./routes/Routes.js"

const app = express();

app.use(cors());
app.use(express.json());
app.use('/goldeng', router);

try {
    await db.authenticate();
    console.log('La conexeión con la DB fue exitosa.');
} catch (error) {
    console.log(`No se pudo dar la conexión con la DB. (${error})`);
}

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(8000, () => {
    console.log('Server UP running in http://localhost:8000/');
});