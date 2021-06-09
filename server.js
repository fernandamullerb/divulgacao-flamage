const express = require("express");
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");
const expressLayouts = require("express-ejs-layouts");
const mysql = require("mysql2");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();

const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "7743252",
  database: "flamagemkt",
});

app.set("view engine", "ejs");

app.use(expressLayouts);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.get("/contact", (req, res) => {
  res.render("pages/contact");
});

app.post("/contact",
  urlencodedParser,
  [
    check("firstName", "O nome precisa ter mais que 3 caracteres")
      .exists()
      .isAlpha()
      .withMessage("Insira apenas letras")
      .isLength({ max: 30, min: 3 }),

    check("email", "O email informado não é válido")
      .not()
      .isEmpty()
      .isEmail()
      .normalizeEmail(),

    check("phone", "Este número de telefone não é válido")
      .trim()
      .isNumeric()
      .withMessage("O telefone deve conter apenas números.")
      .bail()
      .isLength({ max: 11, min: 10 })
      .withMessage("O telefone precisa conter entre 10 e 11 dígitos.")
      .bail()
      .isMobilePhone(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const alert = errors.array();
      res.render("pages/contact", { alert });
    } else {
      var nome = req.body.firstName;
      var sobrenome = req.body.lastName;
      var email = req.body.email;
      var telefone = req.body.phone;
      var empresa = req.body.company;
      var contador = req.body.contador;
      if (contador === "Sim") {
        contador = 1;
      } else {
        contador = 0;
      }

      mysqlConnection.query(
        "INSERT INTO clientes (nome, sobrenome, email, telefone, empresa, contador) VALUES (?, ?, ?, ?, ?, ?)",
        [nome, sobrenome, email, telefone, empresa, contador],
        function (err, result, fields) {
          if (!err) {
            res.render("pages/contact");
          } else {
            console.log(err);
          }
        }
      );
    }
  }
);

app.get("/prices", (req, res) => {
  res.render("pages/prices");
});

app.listen(3333);
console.log("3333 is the magic port");

