const express = require('express');
const app = express();
const PORT = 3001;

app.get('/api', (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.json( {"message": ['Hello World! OSFD TEAM!']} );
})

app.listen(PORT, () => {
    console.log(`Check in http://localhost:${PORT}/api`);
});