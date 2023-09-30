import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import crypto from 'crypto'

const userModel = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is Required"]
    },
    email: {
        type: String,
        required: [true, "Email is Required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is Required"],
        select: false
    },
    role: {
        type: String,
        default: "user"
    },
    avatar: {
        public_id: String,
        url: String
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
})

userModel.pre("save", async function(){
    if(!this.isModified("password")){
        return
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

userModel.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password)
}

userModel.methods.getJWTToken = async function(){
    return await jwt.sign({id: this._id}, process.env.SECRET_KEY)
}

userModel.methods.getResetPasswordToken = async function(){
    const resetToken = crypto.randomBytes(20).toString("hex")
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex")
    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000
    return resetToken
}

export const User = mongoose.model("users", userModel)