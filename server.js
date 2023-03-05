const express = require("express")
const app = express()
const port = 3000

const usersRouter = require('./routes/users');
const fruitsRouter = require('./routes/fruits');

app.use(express.json());

app.use('/users', usersRouter);
app.use('/fruits', fruitsRouter);

// Express Routes

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
