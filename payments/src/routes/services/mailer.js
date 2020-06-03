const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_KEY);

templates = {
  CONFIRMATION_EMAIL: 'd-32fe475b31b8451abe980551646a8f3f',
};

function sendEmail(data) {
  const msg = {
    to: data.receiver,
    from: data.sender,
    templateId: templates[data.templateName],

    dynamic_template_data: {
      name: data.name,
      confirm_account_url: data.confirm_account_url,
      reset_password_url: data.reset_password_url,
    },
  };

  sgMail.send(msg, (err, res) => {
    if (error) {
      console.log(error);
    } else {
      console.log('It Works');
    }
  });
}

exports.sendEmail = sendEmail;
