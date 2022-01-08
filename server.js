const express = require('express');
const path = require('path');

const app = express();

//adding the Express middleware to serve static files
app.use(express.static(path.join(__dirname, './static')));

const port = 3000;
// thats a collback (request,response)
app.get('/',(request, response) => {
    //response.send('Hello world');
    //instead of sending text, send page
    response.sendFile(path.join(__dirname, './static/index.html'));
});

app.get('/speakers',(request, response) => {
    response.sendFile(path.join(__dirname, './static/speakers.html'));
});


app.listen(port, ()=>{
    //backticks because of string interpolation
    console.log(`Server started on ${port}`);
} );
