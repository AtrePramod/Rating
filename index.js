const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

dotenv.config()


// const adsRoutes = require('./routes/adsRouters')

connectDB();

const app = express()

app.use(cors())
app.use(express.json())

// app.use('/api/v1/user', userRoutes) 

//port 
const PORT = process.env.PORT || 8080
//listen
app.listen(PORT, () => {
    console.log(`Server running on ${process.env.DEV_MODE} port no ${PORT}`)
})