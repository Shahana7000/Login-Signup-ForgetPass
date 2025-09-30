import nodemailer from "nodemailer";

const sendEmail = async ({ to, subject, text }) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const message = {
    from: `No Reply <no-reply@example.com>`,
    to,
    subject,
    text
  };

  const info = await transporter.sendMail(message);
  return info;
};

export default sendEmail;
