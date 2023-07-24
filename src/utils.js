const { validationResult } = require('express-validator');
const FormData = require('form-data');
const sendgridClient = require('@sendgrid/client');
const sendgridMail = require('@sendgrid/mail');

const saveToGoogleSheet = async (formData) => {
  // funky form data since it doesn't take JSON POST's etc.
  const form = new FormData();
  Object.keys(formData).forEach((key) => {
    form.append(key, formData[key]);
  });
  const response = await form.submit(process.env.GOOGLE_SHEET_ENDPOINT);
  return response;
};

const addToSendGridList = async (formData) => {
  sendgridClient.setApiKey(process.env.SENDGRID_API_KEY);
  const list_ids = [process.env.SENDGRID_CONTACT_FORM_LIST];
  const contacts = [
    {
      email: formData.email,
      first_name: formData.first_name,
      last_name: formData.last_name,
    }
  ];

  const request = {
    url: `/v3/marketing/contacts`,
    method: 'PUT',
    body: {
      contacts,
      list_ids,
    }
  }

  await sendgridClient.request(request);

}

sendEmailNotification = (formData) => {
  sendgridMail.setApiKey(process.env.SENDGRID_API_KEY);
  const email = {
    to: process.env.CONTACT_FORM_NOTIFICATION_TO,
    from: process.env.CONTACT_FORM_NOTIFICATION_FROM,
    subject: `New Contact Form Submission`,
    text: `
      Name: ${formData.first_name} ${formData.last_name}
      Email: ${formData.email}
      Message: ${formData.message}
    `,
  };
  sendgridMail.send(email);
}

const processForm = async (request, response, next) => {
  const formValidation = validationResult(request);
  const isValid = !formValidation.errors.length;
  request.submitSuccess = isValid;
  const formErrors = {};
  //pass any errors back on the request to render in HBS.
  if (!isValid) {
    formValidation.errors.forEach(error => {
      if (!formErrors[error.path]) {
        formErrors[error.path] = error.msg;
      }
    });
    request.formErrors = formErrors;
  } else {
    //no errors? store the data in places
    const { email, first_name, last_name, telephone, message } = request.body;
    const safeBody = {
      email,
      first_name,
      last_name,
      telephone,
      message,
    };

    // I should 100% add some type of logging if these things fail, but meh.
    saveToGoogleSheet(safeBody);
    addToSendGridList(safeBody);
    sendEmailNotification(safeBody);
  }
  next();
}

module.exports = {
  processForm,
}
