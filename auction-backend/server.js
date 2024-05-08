const express = require('express');
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())

const db = mysql.createConnection({
host: "10.4.9.37",
user: 'dev-auctionusr',
password:'#CM+PaH6cEuWVt@D',
database: 'ml_auction'
})

app.get('/', (re, res)=> {
return res.json("From BAckend Side");
})

app.get('/users', (req, res)=> {
const sql = "SELECT * FROM users";
db.query(sql, (err, data)=> {
if(err) return res.json(err);
return res.json(data);

})
})

app.listen(8081,()=> {
console.log("listening");
})



