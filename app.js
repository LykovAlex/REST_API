const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const task = require('./routes/task.route');
const app = express();

mongoose.connect('mongodb://localhost/tasks-db', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors({origin: '*'}));
app.use('/tasks', task);

const port = 1234;

app.listen(port,()=> {
  console.log('Server is up and running on port number ' + port);
})
