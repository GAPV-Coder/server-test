//Modificar rutas

app.post ("/", (req, res) =>{
  async function envioMail() {
    const { usuario,email } = req.body;
        let transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            user: process.env.USEREMAIL,
            pass: process.env.PASSMAIL
          }
        });
        let envio = await transporter.sendMail({
          from: process.env.USEREMAIL,
          to: `${email}`,
          subject:"Alta de usuario",
          html:`Bienvenido a la app de Citamed ${usuario}! Con nosotros vas a poder pedir, modificar y cancelar turnos medicos de manera facil y rapida. `
        })
          res.render("confirmacionSingIn");
      }
      envioMail()
  });

  module.exports = {
    nodemailer
  }