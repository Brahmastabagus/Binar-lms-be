const router = require('express').Router()
const todoController = require('../controllers/todoController')
const auth = require('../middlewares/auth')

router.get("/", auth, todoController.getTodos)
router.get("/user/:id", auth, todoController.getTodoUser)
router.post("/", auth, todoController.postTodo)
router.put("/:id", auth, todoController.updateTodo)
router.delete("/:id", auth, todoController.deleteTodo)
router.put("/completed/:id", auth, todoController.setCompleted)

module.exports = router