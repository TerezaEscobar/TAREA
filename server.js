const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const users = {
  'tereza10070914@gmail.com': '10070914',
  'user@example.com': '1234',
  // Add more users here
};

app.post('/api/auth', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  if (users[email] && users[email] === password) {
    res.status(200).json({ message: 'Welcome!' });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
