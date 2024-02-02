const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  const { name, email } = req.user;
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "ajayakay1@gmail.com",
      pass: "Undefeatable@12345",
      clientId:
        "679760850966-623eled1c7tf3ifppbbuad6ep4mo31iq.apps.googleusercontent.com",
      clientSecret: "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",
      refreshToken:
        "1//04raxCNnO7NwICgYIARAAGAQSNwF-L9IrX89iA0XOxfxiZpdplvNJTvqAnRAf7bP0iaUITWnNao-9bNsIbs0dg30CfrkhBjiJJn0",
    },
  });

  const mailOptions = {
    from: "ajayakay1@gmail.com",
    to: email,
    subject: "Order Confirmation.",
    text: `Dear ${name}, Your Order has been placed successfully. You will receive an invoice for your order shortly.
            Your order will arrive in 7 business days`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!", info.response);
    res.status(200).send("Email sent successfully!");
  } catch (error) {
    console.log("Error sending email:", error);
    res.status(500).send("Error sending email!");
  }
};

module.exports = { sendEmail };
