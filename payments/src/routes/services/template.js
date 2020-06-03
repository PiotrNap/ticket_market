const sender = require('./mailer');

const emailSender = () => {
  const data = {
    templateName: 'CONFIRMATION_EMAIL',
    sender: 'piotr.napierala94@gmail.com',
    receiver: 'piotr9433@gmail.com',
    name: 'Jonh Test',
  };
  try {
    sender.sendEmail(data);
  } catch (error) {
    console.log(error);
  }
};

exports.emailSender = emailSender;
// to run this --> emailSender();
