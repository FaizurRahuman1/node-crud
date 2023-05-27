const mongoose = require('mongoose')

const connectDb = async () => {
    await mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('mongodb connected succsesfully')
    })
    .catch(err => console.log(err))
}

module.exports = connectDb