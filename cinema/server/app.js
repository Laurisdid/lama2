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
    database: "cinema",
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



// delete
app.delete("/admin/cats/:id", (req, res) => {
    const sql = `
    DELETE FROM category
    where id=?
    `;
    con.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send({ result, msg: { text: 'OK, Cat was deleted', type: 'success' } });
    });
});

// edit
app.put("/admin/cats/:id", (req, res) => {
    const sql = `
    UPDATE category
    SET title =?
    where id=?
    `;
    con.query(sql, [req.body.title, req.params.id], (err, result) => {
        if (err) throw err;
        res.send({ result, msg: { text: 'OK, Cat was updated', type: 'success' } });
    });
});

// Products
app.post("/admin/products", (req, res) => {
    const sql = `
    INSERT INTO products
    (title, price, rating, cats_id)
    VALUES (?, ?, ?, ?)
    `;
    con.query(sql, [req.body.title, req.body.price, req.body.rating, req.body.cat], (err, result) => {
        if (err) throw err;
        res.send({ result, msg: { text: 'OK, new and shiny product was created', type: 'success' } });
    });
});
app.get("/admin/products", (req, res) => {
    const sql = `
  SELECT *
  FROM products
  ORDER BY title
`;
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});
//EDIT
// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;
app.put("/medziai/:prodId", (req, res) => {
    const sql = `
    UPDATE products
    SET title = ?, price = ?, rating = ?, cat_id = ?
    WHERE id = ?
`;
    con.query(sql, [req.body.title, req.body.price, req.body.rating, req.body.cat, req.params.prodId], (err, result) => {
        if (err) throw err;
        res.send({ result, msg: { text: 'OK, Barsukai', type: 'danger' } });
    });
});




app.listen(port, () => {
    console.log(`Bebras klauso porto Nr ${port}`);
});