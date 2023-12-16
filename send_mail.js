const nodemailer = require('nodemailer');

// Create a transporter object using your Gmail account credentials.
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'priyamtomar012@gmail.com', // Replace with your Gmail email
    pass: 'rzxtfuiorakzfcys', // Replace with your Gmail password or an app password
  },
});

// Function to send an email
function sendEmail(userIP) {
  const mailOptions = {
    from: 'priyamtomar012@gmail.com', // Replace with your Gmail email
    to: 'priyamtomar133@gmail.com', // Assuming formData.recipient contains the recipient's email
    subject: 'Someone purchased the Headphone', // Assuming formData.subject contains the email subject
    text: `HIS IP is ${userIP}: Purchased`, // Assuming formData.message contains the email message
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log('Email sent successfully.');
    }
  });
}

module.exports = sendEmail;