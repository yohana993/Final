const mongoose = require("mongoose");
const usersRouter = require("./users");

// users controller
usersRouter.get("/", async (req, res) => {
  const users = await User.find({});

  res.json(users);
});

usersRouter.post("/", async (req, res) => {
  const user = await new User({
    dni: req.body.dni,
    nombres: req.body.nombres,
    apellidos: req.body.apellidos,
    fechaNacimiento: req.body.fechaNacimiento,
    rol: req.body.rol,
    telefono: req.body.telefono,
    correo: req.body.correo,
    contrasena: req.body.contrasena,
    nombreUsuario: req.body.nombreUsuario,
  }).save();

  res.json(user);
});

module.exports = {
  usersRouter,
};

