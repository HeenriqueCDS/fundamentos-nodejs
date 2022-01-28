const express = require('express')

const app = express();

app.get('/', (request, response) => {
    return response.json({ message: "Hello World Iginite - Fundametos NodeJS!" });
});

app.listen(3333)