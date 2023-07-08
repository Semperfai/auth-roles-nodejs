const Router = require('express')
const router = new Router()
const controller = require('./authController')
const { check } = require('express-validator')

router.post('/registration', controller.registration, [
  check('username', 'Name cannot be empty').notEmpty(),
  check('password', 'Password must be more than 4 characters and less than 15').isLength({
    min: 4,
    max: 15
  })
])
router.post('/login', controller.login)
router.get('/users', controller.getUsers)

module.exports = router
