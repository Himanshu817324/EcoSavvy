
const express = require("express")
const router = express.Router()
const authControllers = require("../controllers/AuthController")
// const user = require("./controllers/UserController")
// const { create, get, update, delete: remove } = require('./controllers/PostController');
// const { authenticate } = require('./controllers/AuthController');
// const { protect } = require('./middleware/authMiddleware'); // commented out for now

router.route("/").get(authControllers.home);

router.route("/register").post(authControllers.register);

module.exports = router;
