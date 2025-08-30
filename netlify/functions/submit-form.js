const { parse } = require('querystring');
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const data = parse(event.body);
    const { 
      name, 
      company, 
      contact, 
      projectType, 
      timeline, 
      budget, 
      message 
    } = data;

    await resend.emails.send({
      from: 'onboarding@resend.dev', // Must be a verified domain in Resend
      to: 'shivendraindustries@rediff.com', // The email address you want to receive notifications
      reply_to: contact,
      subject: `New Quote Request from ${company}`,
      html: `
        <h3>New Quote Request for Shivendra Industries</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <hr>
        <p><strong>Service Type:</strong> ${projectType}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${message || 'No additional message provided.'}</p>
      `
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Submission received and email sent!' }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error processing request' }),
    };
  }
};