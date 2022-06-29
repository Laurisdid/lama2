const express = require("express");
const app = express();
const port = 3003;
const cors = require("cors");
app.use(cors());
const mysql = require("mysql");
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "la_ma_goods",
});


// CATS
app.post("/admin/cats", (req, res) => {
    const sql = `
    INSERT INTO category
    (title)
    VALUES (?)
    `;
    con.query(sql, [req.body.title], (err, result) => {
        if (err) throw err;
        res.send({ result, msg: { text: 'OK, new Cat was created', type: 'success' } });
    });
});

app.get("/admin/cats", (req, res) => {
    const sql = `
  SELECT *
  FROM category
  ORDER BY title
`;
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});






app.listen(port, () => {
    console.log(`Bebras klauso porto Nr ${port}`);
});