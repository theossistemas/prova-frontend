import express from 'express'
import cors from 'cors'

import { router } from './routes'
import { connectDatabase } from './database/connect';
import { PORT } from './../env';

const app = express()

connectDatabase()

app.use(express.json())
app.use(cors())
app.use(router)

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT} 😍`);
})