import nodemailer from 'nodemailer'

export const sendEmail = async (email, subject, message) => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMPT_HOST,
        service: process.env.SMPT_SERVICE,
        auth: {
            user: process.env.SMPT_MAIL,
            pass: process.env.SMPT_PASSWORD
        }
    })
    const mailOptions = {
        from: process.env.SMPT_MAIL,
        to: email,
        subject: subject,
        text: message
    }
    await transporter.sendMail(mailOptions)
}