const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const alumnosRoutes = require("./routes/alumnoRoutes");
app.use("/api/alumnos", alumnosRoutes);

module.exports = app;