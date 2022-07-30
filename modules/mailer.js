const nodemailer = require("nodemailer");
require("dotenv").config();

const user = process.env.USER;
const pass = process.env.PASS;

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: user,
    pass: pass,
  },
});

module.exports = {
  sendUserQuestion: (name, email, message) => {
    transport
      .sendMail({
        from: email,
        to: user,
        subject: `Novo pedido de informação do site`,
        html: `<h1>Minhas informações do cliete</h1>
            <p>Nome: ${name}!</p>
            <p>Email: ${email}</p>
            <p>Mensagem: ${message}</p>
            </div>`,
      })
      .catch((err) => console.log(err));
  },

  sendResponseSite: (name, email) => {
    transport
      .sendMail({
        from: user,
        to: email,
        subject: `Resposta ao pedido de informação`,
        html: `<h1>Seu pedido está a ser analisado</h1>
            <h2>Olá ${name}!</h2>
            <span>Estamos a trabalhar para responder ao seu pedido o mais rápido possível</span>
            <p>Caso não tenha a sua resposta em 24h, porfavor, ligue para os seguintes terminais: </p>
            <p>Telefone 1: <strong>931868200</strong></p>
            <p>Telefone 1: <strong>931868200</strong></p>
            </div>`,
      })
      .catch((err) => console.log(err));
  },
};
