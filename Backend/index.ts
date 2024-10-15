import express from "express";
import mongoose from "mongoose";
const PORT = process.env.PORT
const DB_CONN_STR = process.env.DB_CONN_STR!
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World again again!')
})

mongoose.connect(DB_CONN_STR, {}).then(() => console.log("DB connected successfully"))

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})