const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3004;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));

//mongoose connection details
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/SocialNetworking', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

//app port details
app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
