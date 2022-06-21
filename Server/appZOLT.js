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
    database: "lam",
});

//Routes6
//READ
app.get("/medziai", (req, res) => {
    const sql = `
  SELECT
  *
  FROM zolts
`;
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});
//CREATE
// INSERT INTO table_name (column1, column2, column3, ...)
// VALUES (value1, value2, value3, ...);
app.post("/medziai", (req, res) => {
    const sql = `
INSERT INTO zolts
(status, lastTime, totalKm, name, type, place)
VALUES (?, ?, ?, ?, ?, ?)
`;
    con.query(sql, [req.body.status, req.body.lastTime, req.body.totalKm, req.body.name, req.body.type, req.body.place], (err, result) => {
        if (err) throw err;
        res.send({ result, msg: { text: 'Created', type: 'success' } });
    });
});

//DELETE
// DELETE FROM table_name WHERE condition;
app.delete("/medziai/:treeId", (req, res) => {
    const sql = `
DELETE FROM zolts
WHERE id = ?
`;
    con.query(sql, [req.params.treeId], (err, result) => {
        if (err) throw err;
        res.send({ result, msg: { text: 'Deleted', type: 'danger' } });
    });
});

//EDIT
// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;
app.put("/medziai/:treeId", (req, res) => {
    const sql = `
    UPDATE zolts
    SET status = ?, lastTime = ?, totalKm = ?, name = ?, type = ?, place = ?
    WHERE id = ?
`;
    con.query(sql, [req.body.status, req.body.lastTime, req.body.totalKm, req.body.name, req.body.type, req.body.place, req.params.treeId], (err, result) => {
        if (err) throw err;
        res.send({ result, msg: { text: 'Edited', type: 'info' } });
    });
});


app.listen(port, () => {
    console.log(`Bebras klauso porto Nr ${port}`);
});