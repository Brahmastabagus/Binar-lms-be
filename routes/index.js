const router = require('express').Router()
const User = require('./user')
const Todo = require('./todo')

router.use('/api/v1/user', User)
router.use('/api/v1/todo', Todo)

module.exports = router