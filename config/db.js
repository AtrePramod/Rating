const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connect to mongodb Database successful ${mongoose.connection.host}`)
    } catch (error) {
        console.log(" mongo Connect error")
    }
}

module.exports = connectDB;