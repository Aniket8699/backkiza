let mongoose = require('mongoose')
const dbPath = 'mongodb+srv://aniket:aniket@nodetest.ga5zv.mongodb.net/kiza'
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(dbPath, options).then(res => {
    console.log("Db Connected")
}).catch(err => {
    console.log("Db Connect Err", err)
})
