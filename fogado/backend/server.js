const express = require('express')  //importálom az expresst

const app = express(); //létrehozom az alkalmazás példányt

app.get('/', (req, res) => {  //alap útvonal
    res.send('Hello, backend')
});

const PORT = 3307;  //beállítom az általam használt portot

app.listen(PORT, () => {  //indítom a szervert
    console.log(`A szerver fut a https://localhost:${PORT} címen`) 
});



