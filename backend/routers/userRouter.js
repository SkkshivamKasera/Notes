import express from 'express'
import { login, register, logout, loadUser, enroll, removeEnroll, forgotPassword, resetPassword } from '../actions/userAction.js'
import { isAuthentiated } from '../middleware/auth.js'

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.get('/logout', logout)
router.get('/me', isAuthentiated, loadUser)
router.post("/forgotpassword", forgotPassword)
router.post("/resetpassword/:token", resetPassword)

router.get('/enroll/add/:id', isAuthentiated, enroll)
router.get('/enroll/remove/:id', isAuthentiated, removeEnroll)

export default router