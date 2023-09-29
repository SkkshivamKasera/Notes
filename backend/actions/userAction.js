import { Course } from "../models/courseModel.js"
import { User } from "../models/userModel.js"
import { sendEmail } from "../utils/sendEmail.js"
import { sendToken } from "../utils/sendToken.js"
import crypto from 'crypto'

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "⚠️ All Fields Are Required" })
        }
        let user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ success: false, message: "❌ User Already Exists" })
        }
        user = await User.create({
            name, email, password
        })
        await sendToken(user, true, "✅ Sign Up Successfully", res)
    } catch (error) {
        return res.status(500).json({ success: false, message: `❌ ${error.message}` })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ success: false, message: "⚠️ All Fields Are Required" })
        }
        const user = await User.findOne({ email }).select("+password")
        if (!user) {
            return res.status(400).json({ success: false, message: "❌ Invalid Email or Password" })
        }
        const isMatched = await user.comparePassword(password)
        if (!isMatched) {
            return res.status(400).json({ success: false, message: "❌ Invalid Email or Password" })
        }
        await sendToken(user, true, "✅ Login Successfully", res)
    } catch (error) {
        return res.status(500).json({ success: false, message: `❌ ${error.message}` })
    }
}

export const logout = async (req, res) => {
    try {
        await sendToken(null, false, "✅ Logout Successfully", res)
    } catch (error) {
        return res.status(500).json({ success: false, message: `❌ ${error.message}` })
    }
}

export const loadUser = async (req, res) => {
    try {
        const user = await User.findById(req.user._id)
        res.status(200).json({ success: true, user })
    } catch (error) {
        return res.status(500).json({ success: false, message: `❌ ${error.message}` })
    }
}

export const forgotPassword = async (req, res) => {
    const { email } = req.body
    const user = await User.findOne({ email })
    if (!user) { return res.status(400).json({ success: false, message: "❌ Invalid Email" }) }
    const resetToken = await user.getResetPasswordToken()
    await user.save({ validateBeforeSave: false })
    const resetPasswordLink = `${process.env.FRONTEND_RESET_LINK}/password/reset/${resetToken}`
    const message = `Your password reset link is :- \n\n${resetPasswordLink}\n\nIf you have not requested this email then, please ignore it`
    try {
        await sendEmail(email, "Reset Notes App Password", message)
        res.status(200).json({ success: true, message: "✅ Reset Password Mail Send Successfully" })
    } catch (error) {
        user.resetPasswordToken = undefined
        user.resetPasswordExpire = undefined
        await user.save({ validateBeforeSave: false })
        return res.status(500).json({ success: false, message: `❌ ${error.message}` })
    }
}

export const resetPassword = async (req, res) => {
    try {
        const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex")
        const user = await User.findOne({ resetPasswordToken, resetPasswordExpire: { $gt: Date.now() } })
        if (!user) { return res.status(400).json({success: false, message: "❌ Token Expire"}) }
        if (req.body.password !== req.body.confirmPassword) {
            return res.status(400).json({success: false, message: "❌ Password not changable"})
        }
        user.password = req.body.password
        user.resetPasswordToken = undefined
        user.resetPasswordExpire = undefined

        await user.save()
        await sendEmail(user.email, "Password Reset Successful", "Your password has been successfully reset.")
        sendToken(user, true, "success", res)
    }
    catch (error) {
        return res.status(500).json({ success: false, message: `❌ ${error.message}` })
    }
}

export const enroll = async (req, res) => {
    try {
        const user = await User.findById(req.user._id)
        const { id } = req.params
        const course = await Course.findById(id)
        if (!course) {
            return res.status(400).json({ success: false, message: "❌ Course Not Found" });
        }
        const isEnrolled = course.enrollments.some(enrollment => enrollment.user_id.toString() === user._id.toString());
        if (isEnrolled) {
            return res.status(400).json({ success: false, message: "⚠️ Already Enrolled" });
        }
        course.enrollments.push({
            user_id: user._id
        });
        await course.save();
        return res.status(200).json({ success: true, message: "✅ Enrolled Successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, message: `❌ ${error.message}` })
    }
}

export const removeEnroll = async (req, res) => {
    try {
        const user = await User.findById(req.user._id)
        const { id } = req.params
        const course = await Course.findById(id)
        if (!course) {
            return res.status(400).json({ success: false, message: "❌ Course Not Found" });
        }
        const isEnrolled = course.enrollments.some(enrollment => enrollment.user_id.toString() === user._id.toString());
        if (!isEnrolled) {
            return res.status(400).json({ success: false, message: "⚠️ Not Enrolled" });
        }
        course.enrollments = course.enrollments.filter((enrollment) => enrollment.user_id.toString() !== user._id.toString())
        await course.save();
        return res.status(200).json({ success: true, message: "✅ Removed Successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, message: `❌ ${error.message}` })
    }
}