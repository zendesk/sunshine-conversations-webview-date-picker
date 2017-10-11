const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const SmoochCore = require('smooch-core');

const smooch = new SmoochCore({
  jwt: 'your_jwt'
});

const app = express();

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.use('*', bodyParser.json());

app.post('/date-selected', (req, res) => {
  smooch.appUsers.sendMessage(req.body.appUserId, {
    role: 'appMaker',
    type: 'text',
    text: `You have selected ${req.body.date}. Enjoy your flight!`
  }).then(() => {
    console.log('success!');
    res.end();
  })
  .catch((e) => {
    console.log('error! :: ', e);
    res.end();
  });
});

app.post('/appuser-message', (req, res) => {
  const appUserId = req.body.appUser._id;

  smooch.appUsers.sendMessage(appUserId, {
    role: 'appMaker',
    type: 'text',
    text: 'Please select your flight date.',
    actions: [{
      type: 'webview',
      text: 'Select Date',
      uri: `http://localhost:9000/webview?appUserId=${appUserId}`,
      fallback: 'https://no-thanks.html'
    }]
  }).then(() => {
    console.log('success!');
    res.end();
  })
  .catch((e) => {
    console.log('error! :: ', e);
    res.end();
  });
});

module.exports = app;