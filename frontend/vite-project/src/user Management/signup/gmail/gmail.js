import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "kashifasif0347@gmail.com",
    pass: "oclf cmks oyht uyqr",
  },
});



const mailOptions = {
    from: "kashifasif0347@gmail.com",
    to: "kashifasif0347@gmail.com",
    subject: "Hello from Nodemailer",
    text: "This is my test mail",
};




const sentMail = (req, res) => {
    try {
        transporter.sentMail(mailOptions, (error, info) => {
            if (error) {
                res.send({
                    message: "Failed to send mail",
                    error: error.message
                });
            } else {
                res.send({
                    message: "Mail sent successfully",
                    info: info.response
                });
            }
        });
    } catch (err) {
        res.send({
            message: err.message
        });
    }
};

export default sentMail;














