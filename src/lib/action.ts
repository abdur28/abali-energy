'use server';

import nodemailer from 'nodemailer';

export const sendEmail = async (prevState: any, formData: any) => {
  
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.USER_EMAIL,
          pass: process.env.USER_KEY
        }
    });

    const { name, email, message, subject, vacancy, phone } = Object.fromEntries(formData);
   
    // console.log(myEmail, name, email, message, subject, vacancy, phone)
  
  
    try {
  
      const mailOptions = {
        from: `Abali Energy <abdurrahmanidris235@gmail.com>`,
        to: "info@abalienergy.com",
        subject: `${subject}`,
        html: `<html>
        ${subject === "Career at Abali Energy" ? `<p>Position: ${vacancy}</p>` : ''}
        <p>Name: ${name}.</p><p>Email: ${email}.</p><p>Message: ${message}</p></html>`
      };
      
      // Send the email
      transporter.sendMail(mailOptions, function (error: any) {
        if (error) {
          console.error('Error sending email:', error);
          return {
            status: 'error',
            message: 'Opps, there was an error'
          };
        } else {
          console.log('Email sent successfully');
          return {
            status: 'success',
            message: 'Email sent successfully'
          };
        }
      });
      return {
        status: 'success',
        message: 'Email sent successfully'
      };
  
    } catch (error) {
        console.error('Error sending email:', error);
        return {
          status: 'error',
          message: 'Failed, Error: 500'
        };
    }
  
  };