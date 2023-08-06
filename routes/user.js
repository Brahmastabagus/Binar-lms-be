const router = require('express').Router()
const userController = require('../controllers/userController')
const auth = require('../middlewares/auth')

router.get("/", auth, userController.getUsers)
router.post("/login", userController.login)

module.exports = router