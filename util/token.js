const jwt = require("jsonwebtoken");

const Token = (id) => {
  const payload = {
    user: {
      id,
    },
  };
  const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: "1d", // expires in 24 hours
  });
  return token;
};

module.exports = Token;
