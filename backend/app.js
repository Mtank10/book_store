const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const dotenv = require('dotenv')
const bookRoutes = require('./routes/bookRoutes')
const authRoutes = require('./routes/authRoutes')
const checkoutRoutes = require('./routes/checkoutRoutes')
const errorMiddleware = require('./middleware/errorMiddleware')

dotenv.config()
const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())
//Routes 

app.use('/api/books', bookRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/', checkoutRoutes)

//Error handling middleware

app.use(errorMiddleware)

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})