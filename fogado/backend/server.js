const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());

const PORT = 3000;

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fogado',
    port: 3307
});

/*db.connect(err => {
    if (err) {
        console.error('Hiba történt a kapcsolódáskor:', err);
    } else {
        console.log('Sikeres adatbázis kapcsolat');
    }
});*/

app.get('/', (req, res) => {
    res.send('Hello, backend');
});

app.get('/api/szobak', (req, res) => {
    db.query('SELECT sznev, agy FROM szobak', (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Lekérdezési hiba' });
        } else {
            res.json(result);
        }
    });
});

app.get('/api/foglalasok', (req, res) => {
    db.query(`SELECT foglalasok.szoba, vendegek.vnev
              FROM foglalasok
              JOIN vendegek ON foglalasok.vendeg = vendegek.vsorsz
              ORDER BY vendegek.vnev ASC`, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Lekérdezési hiba' });
        } else {
            res.json(result);
        }
    });
});

app.listen(PORT, () => {
    console.log(`A szerver fut a http://localhost:${PORT} címen`);
});
