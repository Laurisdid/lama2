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
    database: "lama",
});



//Routes
//READ
app.get("/medziai", (req, res) => {
    const sql = `
  SELECT
  t.title AS title, g.title AS good,height, type, t.id
  FROM trees AS t
  LEFT JOIN goods AS g
  ON t.good_id = g.id
`;
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});
app.get("/gerybes", (req, res) => {
    const sql = `
  SELECT
  g.title,g.id, COUNT(t.id) AS trees_count
  FROM trees AS t
  RIGHT JOIN goods AS g
  On t.good_id = g.id
  GROUP BY g.id
  ORDER BY g.title
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
INSERT INTO trees
(type, title, height, good_id)
VALUES (?, ?, ?, ?)
`;
con.query(sql, [req.body.type, req.body.title, req.body.height ? req.body.height : 0, req.body.good !== '0' ? req.body.good : null], (err, result) => {
    if (err) throw err;
        res.send({ result, msg: { text: 'OK, Zuiki', type: 'success' } });
    });
});
app.post("/gerybes", (req, res) => {
    const sql = `
INSERT INTO goods
(title)
VALUES (?)
`;
    con.query(sql, [req.body.title], (err, result) => {
        if (err) throw err;
        res.send({ result, msg: { text: 'OK, Zuiki', type: 'success' } });
    });
});

//DELETE
// DELETE FROM table_name WHERE condition;
app.delete("/medziai/:treeId", (req, res) => {
    const sql = `
DELETE FROM trees
WHERE id = ?
`;
    con.query(sql, [req.params.treeId], (err, result) => {
        if (err) throw err;
        res.send({ result, msg: { text: 'OK, Bebrai', type: 'info' } });
    });
});

//DELETE
// DELETE FROM table_name WHERE condition;
app.delete("/gerybes/:goodId", (req, res) => {
    const sql = `
DELETE FROM goods
WHERE id = ?
`;
    con.query(sql, [req.params.goodId], (err, result) => {
        if (err) throw err;
        res.send({ result, msg: { text: 'OK, Bebrai', type: 'info' } });
    });
});


//EDIT
// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;
app.put("/medziai/:treeId", (req, res) => {
    const sql = `
    UPDATE trees
    SET title = ?, type = ?, height = ?, good_id = ?
    WHERE id = ?
`;
    con.query(sql, [req.body.title, req.body.type, req.body.heigh, req.body.good, req.params.treeId,], (err, result) => {
        if (err) throw err;
        res.send({ result, msg: { text: 'OK, Barsukai', type: 'danger' } });
    });
});



app.listen(port, () => {
    console.log(`Bebras klauso porto Nr ${port}`);
});