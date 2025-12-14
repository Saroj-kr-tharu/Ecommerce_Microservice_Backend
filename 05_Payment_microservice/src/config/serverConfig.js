const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  MESSAGE_BROKER_URL:process.env.MESSAGE_BROKER_URL,
  REMINDER_BINDING_KEY: process.env.REMINDER_BINDING_KEY,
  EXCHANGE_NAME: process.env.EXCHANGE_NAME,
  MARKETMANDU_URL: process.env.MARKETMANDU_URL,
  PAYMENT_BACKEND_URL: process.env.PAYMENT_BACKEND_URL,
  FORTEND_SUCESS_URL: process.env.FORTEND_SUCESS_URL,
  
};
