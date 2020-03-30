const express = require("express");

// Controllers
const OngController = require("./controllers/OngController");
const IncidentsController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

// Rota de login
routes.post("/sessions", SessionController.create);

// Rotas de Ongs
routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

// Rotas de profile
routes.get("/profile", ProfileController.index);

// Rotas de incidentes
routes.get("/incidents", IncidentsController.index);
routes.post("/incidents", IncidentsController.create);
routes.delete("/incidents/:id", IncidentsController.delete);

module.exports = routes;
