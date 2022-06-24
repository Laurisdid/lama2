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
 z.name AS name, g.title AS good,status,lastTime,totalKm,type,place,z.id
  FROM zolts AS z
  LEFT JOIN goods as g
  ON z.good_id = g.id
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
(status, lastTime, totalKm, name, type, place,good_id)
VALUES (?, ?, ?, ?, ?, ?,?)
`;
  con.query(
    sql,
    [
      req.body.status,
      req.body.lastTime,
      req.body.totalKm,
      req.body.name,
      req.body.type,
      req.body.place,
      req.body.good !== "0" ? req.body.good : null,
    ],
    (err, result) => {
      if (err) throw err;
      res.send({ result, msg: { text: "Created", type: "success" } });
    }
  );
});

//DELETE
// DELETE FROM table_name WHERE condition;
app.delete("/medziai/:zoltId", (req, res) => {
  const sql = `
DELETE FROM zolts
WHERE id = ?
`;
  con.query(sql, [req.params.zoltId], (err, result) => {
    if (err) throw err;
    res.send({ result, msg: { text: "Deleted", type: "danger" } });
  });
});

//EDIT
// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;
app.put("/medziai/:treeId", (req, res) => {
  const sql = `
    UPDATE zolts
    SET status = ?, lastTime = ?, totalKm = ?, name = ?, type = ?, place = ?, good_id=?
    WHERE id = ?
`;
  con.query(
    sql,
    [
      req.body.status,
      req.body.lastTime,
      req.body.totalKm,
      req.body.name,
      req.body.type,
      req.body.place,
      req.body.good,
      req.params.treeId,
    ],
    (err, result) => {
      if (err) throw err;
      res.send({ result, msg: { text: "Edited", type: "info" } });
    }
  );
});

app.listen(port, () => {
  console.log(`Bebras klauso porto Nr ${port}`);
});

///nuoma///
//CREATE
// INSERT INTO table_name (column1, column2, column3, ...)
// VALUES (value1, value2, value3, ...);
app.post("/rent", (req, res) => {
  const sql = `
INSERT INTO goods
(title)
VALUES (?)
`;
  con.query(sql, [req.body.title], (err, result) => {
    if (err) throw err;
    res.send({ result, msg: { text: "Created", type: "success" } });
  });
});
//READ
app.get("/rent", (req, res) => {
  const sql = `
  SELECT
  g.title, g.id, COUNT(z.id) AS TotalModules
  FROM zolts AS z
  RIGHT JOIN goods as g
  ON z.good_id = g.id
  GROUP BY g.id
  ORDER BY COUNT(z.id) DESC
`;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});


//READ
app.get("/front/rent", (req, res) => {
  const sql = `
  SELECT
  g.title, g.id, COUNT(z.id) AS TotalModules, GROUP_CONCAT(z.name) as zolt_titles
  FROM zolts AS z
  RIGHT JOIN goods as g
  ON z.good_id = g.id
  GROUP BY g.id
  ORDER BY g.title
`;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
//DELETE
// DELETE FROM table_name WHERE condition;
app.delete("/rent/:goodId", (req, res) => {
  const sql = `
DELETE FROM goods
WHERE id = ?
`;
  con.query(sql, [req.params.goodId], (err, result) => {
    if (err) throw err;
    res.send({ result, msg: { text: "Deleted", type: "danger" } });
  });
});
