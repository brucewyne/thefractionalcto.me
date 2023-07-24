const { body } = require('express-validator');

const contactFormValidation = () => [
  body('first_name')
    .isLength({ min: 1 })
    .withMessage('I\'d love to know what to call you'),
  body('last_name')
    .isLength({ min: 1 })
    .withMessage('No last name? Person of Mystery, I see.'),
  body('message')
    .isLength({ min: 1 })
    .withMessage('Don\'t be shy.'),
  body('email')
    .isLength({ min: 1 })
    .withMessage('I\'d love to be able to respond to this message.')
    .isEmail()
    .withMessage("Your email isn't properly formatted.")
];

module.exports = contactFormValidation;
