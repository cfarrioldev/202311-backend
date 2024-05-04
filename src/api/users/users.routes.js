const UserRoutes = require("express").Router();
const { isAuth } = require("../../middlewares/auth.middleware");
const { register, login, isAdmin } = require("./users.controllers");

UserRoutes.post("/register", register);
UserRoutes.post("/login", login);
UserRoutes.get("/is-admin", isAdmin);

module.exports = UserRoutes;
