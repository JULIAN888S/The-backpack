const express = require('express');
const cors = require('cors');
const app = express();

//settting
app.set('port', process.env.PORT || 4000);

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));

module.exports = app;