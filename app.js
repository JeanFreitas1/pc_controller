const express = require('express');
const app = express();
var ks = require('node-key-sender');

app.use('/', express.static(__dirname + '/public'));

app.use(express.json());

app.post('/sendkey', (req, res) => {
  console.log(req.body.key);
  ks.sendKey(req.body.key);
  res.json({ type: 'test', success: true });
});

(async () => {
  try {
    const port = 3300;
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
