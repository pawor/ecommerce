require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles: true
}))

app.use('/user',require('./routes/userRouter'))

const URI = process.env.MONGODB_URL
mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex:true
}).then(() => console.log("DB Connection Successfull!")).catch(err => console.log(err))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('Server is running on port',PORT)
})