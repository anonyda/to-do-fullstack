const express = require('express');

const taskRouter = require('./routes/taskRouter')

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
})

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Successful.'
    })
})

app.use('/tasks', taskRouter);

// app should start when DB is connected

module.exports = app;