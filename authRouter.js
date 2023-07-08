const Router = require('express')
const router = new Router()
const controller = require('./authController')
const { check } = require('express-validator')
const authMiddleware = require('./middleware/authMiddleware')
const roleMiddleware = require('./middleware/roleMiddleware')

router.post(
  '/registration',
  [
    check('username', 'Name cannot be empty').notEmpty(),
    check('password', 'Password must be more than 4 characters and less than 15').isLength({
      min: 4,
      max: 15
    })
  ],
  controller.registration
)
router.post('/login', controller.login)
router.get('/users', roleMiddleware(['USER', 'ADMIN']), controller.getUsers)

module.exports = router
