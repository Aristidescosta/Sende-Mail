const express = require("express");
const app = express();
const nodemailer = require("./modules/mailer");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const port = process.env.PORT;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors());

app.post("/send-e-mail/:name/:email/:message", (req, res) => {
  try {
    const { name, email, message } = req.params;
    nodemailer.sendUserQuestion(name, email, message);
    return res.status(200).send({ message: "E-mail enviado com sucesso" });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "1 Houve um erro interno: " + error });
  }
});

app.post("/send-user-email/:name/:email/:message", (req, res) => {
  try {
    const { name, email } = req.params;

    nodemailer.sendResponseSite(name, email);
    return res
      .status(200)
      .send({ message: "E-mail do site enviado com sucesso" });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "2 Houve um erro interno: " + error });
  }
});

app.listen(port, console.log(`Servidor rodando na porta ${port}`));
