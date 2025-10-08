const express = require('express')  //importálom az expresst

const app = express(); //létrehozom az alkalmazás példányt

app.get('/', (req, res) => {  //alap útvonal
    res.send('Hello, backend')
});

const PORT = 3307;  //beállítom az általam használt portot

app.listen(PORT, () => {  //indítom a szervert
    console.log(`A szerver fut a https://localhost:${PORT} címen`) 
});

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fogado'
}

);

db.connect(err => {
    if (err) {
        console.error('Hiba történt')
    } else {
        console.log('Sikeres a kapcsolat')
    }

}

);

//a feladat

app.get('/api/szobak', (req, res) => {
    db.query('select sznev, agy from szobak,', (err, result) => {
        if (err) {
            res.status(500).json({error: 'Lekérdezési hiba'});
        } else {
            res.json(result);
        }
    }
);
}

);

//c feladat

app.get('/api/szobak', (req, res) => {
    db.query(`select foglalasok.szoba, vendegek.vnev
from foglalasok
join vendegek on foglalasok.vendeg = vendegek.vsorsz
order by vendegek.vnev asc`, (err, result) => {
        if (err) {
            res.status(500).json({error: 'Lekérdezési hiba'});
        } else {
            res.json(result);
        }
    }
);
}

);





