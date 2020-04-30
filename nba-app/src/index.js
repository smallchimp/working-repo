const express = require('express');
require('./db/mongoose');
const playRouter = require('./routers/plays')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(playRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const bcrypt =  require('bcryptjs');

const myFunction = async () => {
    const password = 'Red12345!'
    const hashedPassword = await bcrypt.hash(password, 8)

    console.log(password)
    console.log(hashedPassword)

    const isMatch = await bcrypt.compare(password, hashedPassword)
    console.log(isMatch)
}

myFunction()