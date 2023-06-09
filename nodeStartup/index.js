const express = require('express')

const app = express();

const {readFile} = require('fs')

app.get('/', (request, response) => {
    //request - users incoming data
    //response - my outgoing data

    readFile('./home.html', 'utf8', (err, html) => {
        if (err){
            response.status(500).send("sorry, out of order")
        }
        response.send(html)
    })

})


app.listen(process.env.PORT || 3000, () => console.log('App available on port 300'))