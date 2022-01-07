const express = require('express');

const app = express();

const port = 3000;
// thats a collback (request,response)
app.get('/',(request, response) => {
    response.send('Hello world');
});


app.listen(port, ()=>{
    //backticks because of string interpolation
    console.log(`Server started on ${port}`);
} );
