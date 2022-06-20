const express = require('express')
const app = express()
const port = 3003
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

//ROUTES
app.get('/', (req, res) => {
  res.send('Hello  PokeWorld!')
})
app.get('/zuikis', (req, res) => {
  res.send('Hello zuikis!')
})
app.get("/medziai", (req, res) => {
  const sql = `
  SELECT
  *
  FROM trees
`;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(port, () => {
  console.log(`Lama is listening on port ${port}`)
})
