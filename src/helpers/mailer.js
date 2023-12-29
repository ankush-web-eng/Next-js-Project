import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

export const sendMail = async ({ email, emailType, userId }) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "bd31865b753723",
        pass: "d2a547efc02709",
      },
    });

    const mailOptions = {
      from: "deshwalankush23@gmail.com",
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify Your Password" : "Reset Your Password",
      html: `<p>Click <a href = "${
        process.env.DOMAIN
      }/verifyemail?token=${hashedToken}">here</a>
            to ${
              emailType === "VERIFY"
                ? "Verify Your Email"
                : "Reset Your Password"
            } </p>`,
    };

    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;
  } catch (error) {
    throw new Error(error.message);
  }
};
