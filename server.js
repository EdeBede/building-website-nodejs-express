const express = require('express');
const path = require('path');

//eslint: npx eslint --init

const app = express();

//adding the Express middleware to serve static files
app.use(express.static(path.join(__dirname, './static')));

const port = 3000;
//using view engine ejs
app.set('view engine', 'ejs');
//adding the views
app.set('views', path.join(__dirname, './views'));

// thats a collback (request,response)
app.get('/', (request, response) => {
  //response.send('Hello world');
  //instead of sending text, send page
  //response.sendFile(path.join(__dirname, './static/index.html'));
  //instead of rendering page, rendering dynamically from template, using response
  response.render('pages/index', { pageTitle: 'Welcome' });
});

app.get('/speakers', (request, response) => {
  response.sendFile(path.join(__dirname, './static/speakers.html'));
});

app.listen(port, () => {
  //backticks because of string interpolation
  console.log(`Server started on ${port}`);
});
