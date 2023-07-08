const express = require('express');
const PORT = process.env.PORT || 5000
const mongoose = require('mongoose');
const authRouter = require('./authRouter,js')
const app = express()
app.use(express.json())
app.use('auth',authRouter)

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://svyat:Test123@cluster0.p2pami3.mongodb.net/`)
        app.listen(PORT,() => console.log(`listening on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()