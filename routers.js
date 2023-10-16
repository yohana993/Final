const express = require("express");

const app = express();

const usersRouter = express.Router();

app.use("/users", usersRouter);

usersRouter.get("/", (req, res) => {
  const users = User.find({});

  res.json(users);
});

usersRouter.post("/", (req, res) => {
  const user = new User({
    dni: req.body.dni,
    nombres: req.body.nombres,
    apellidos: req.body.apellidos,
    fechaNacimiento: req.body.fechaNacimiento,
    rol: req.body.rol,
    telefono: req.body.telefono,
    correo: req.body.correo,
    contrasena: req.body.contrasena,
    nombreUsuario: req.body.nombreUsuario,
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(user);
    }
  });
});

app.listen(3000, () => {
  console.log("API running on port 3000");
});

