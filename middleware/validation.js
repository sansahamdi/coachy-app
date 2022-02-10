const { validationResult, body } = require("express-validator");

const login = () => [
  body("email_utilisateur", "email is required").notEmpty(),
  body("password", "password is required").notEmpty(),
];

const validation = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json(error.array());
  } else {
    next();
  }
};

module.exports = {
  validation,
  login,
};
