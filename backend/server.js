const express = require('express');
const bodyParser = require('body-parser');
const { trackAddress } = require('./utils/blockchain');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());

// Set up email notification system (using environment variables)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Route to start tracking an address
app.post('/api/track', (req, res) => {
    const { address, email } = req.body;

    trackAddress(address, (transactionDetails) => {
        // Send email notification when the transaction happens
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: `New transaction to ${address}`,
            text: JSON.stringify(transactionDetails),
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error sending email');
            }
            res.status(200).send('Tracking started and notification set up.');
        });
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
